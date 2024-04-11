import { useState, createContext, useEffect, useMemo, useContext } from "react";

// Import MUI components
// Import MUI Icons
// Import External Libraries
import axios from "axios";
import { useLocation } from "react-router-dom";
// Import constants, functions and services
import { useLoader } from "../../context/LoaderProvider";

// Import Custom Styles
// Import Customized Components

// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * Array defining the headings for the transactions table.
 * @type {Array<object>}
 */

const tableHeadings = [
  { name: "ID", minWidth: 200 },
  { name: "Author", minWidth: 200 },
  { name: "Country", minWidth: 200 },
  { name: "Language", minWidth: 200 },
  { name: "Link", minWidth: 200, isCenter: true },
  { name: "Pages", minWidth: 200 },
  { name: "Title", minWidth: 200 },
  { name: "Year", minWidth: 200 },
];

/**
 * Context for managing transactions data.
 * @type {object}
 */
const TransactionsContext = createContext(null);
/**
 * Provider component for TransactionsContext.
 * @param {object} children The children components.
 * @returns {JSX.Element} The JSX element for the TransactionsProvider.
 */
const TransactionsProvider = ({ children }: any) => {
  const [priorPeriodLibrary, setPriorPeriodLibrary] = useState([]);
  const [priorPeriodLibraryDialogOpen, setPriorPeriodLibraryDialogOpen] =
    useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [transactionsCount, setTransactionsCount] = useState(null);

  const { showLoader, hideLoader }: any = useLoader();
  const { search } = useLocation();
  const routeState = Object.fromEntries(new URLSearchParams(search));

  useEffect(() => {
    getTransactions();
  }, [page, rowsPerPage]);
  /**
   * Function to fetch data for transactions.
   */
  const getTransactions = async () => {
    showLoader();
    try {
      const response = await axios.get(
        `http://fe-test.dev.rampnow.io:8000/api/books?page=${
          page + 1
        }&limit=${rowsPerPage}`
      );
      setPriorPeriodLibrary(response?.data?.data);
      setTransactionsCount(response?.data?.count);
      hideLoader();
    } catch (error) {
      hideLoader();
      console.error("Error fetching data:", error);
    }
  };

  /**
   * Function to export transactions data to CSV format.
   */
  const exportToCSV = () => {
    if (!priorPeriodLibrary || priorPeriodLibrary.length === 0) return;

    // Define the order of columns
    const columnOrder: string[] = [
      "id",
      "title",
      "author",
      "country",
      "imagelink",
      "language",
      "link",
      "pages",
      "year",
    ];

    // Generate CSV content
    let csvContent = "data:text/csv;charset=utf-8,";

    // Add column names as the first row, respecting the order
    csvContent += columnOrder.join(",") + "\n";

    // Add data rows
    priorPeriodLibrary.forEach((data: any) => {
      const values = columnOrder.map((columnName) => {
        let value: string | number | null | undefined = data[columnName];
        // Handle null or undefined values
        if (value === null || value === undefined) {
          return "";
        }
        // Wrap string values containing commas or negative numbers in double quotes
        if (
          (typeof value === "string" && value.includes(",")) ||
          (typeof value === "number" && value < 0)
        ) {
          return `"${value}"`;
        }
        return value;
      });
      csvContent += values.join(",") + "\n";
    });

    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
  };
  /**
   * Memoized context values.
   * @type {object}
   */
  const contextValues: any = useMemo(
    () => ({
      routeState,
      priorPeriodLibraryDialogOpen,
      setPriorPeriodLibraryDialogOpen,
      transactionsCount,
      setTransactionsCount,
      priorPeriodLibrary,
      setRowsPerPage,
      rowsPerPage,
      page,
      setPage,
      exportToCSV,
      tableHeadings,
    }),
    [
      page,
      rowsPerPage,
      routeState,
      transactionsCount,
      priorPeriodLibrary,
      priorPeriodLibraryDialogOpen,
      tableHeadings,
    ]
  );

  return (
    <TransactionsContext.Provider value={contextValues}>
      {children}
    </TransactionsContext.Provider>
  );
};

/**
 * Hook for accessing TransactionsContext.
 * @returns {object} The context value.
 */
const useTransactions = () => useContext(TransactionsContext);

export { TransactionsProvider, useTransactions, TransactionsContext };
