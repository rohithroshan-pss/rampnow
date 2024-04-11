import React from "react";
// Import MUI components
import { Grid, TablePagination, Typography } from "@mui/material";
// Import MUI Icons
// Import External Libraries
import { MdOutlineFileDownload } from "react-icons/md";

// Import constants, functions and services
import { muiCustomization } from "../../style/common";
// Import Custom Styles

import { useTransactions } from "./PriorPeriodLibraryContext";

// Import Customized Components
import { ROW_PER_PAGE_OPTIONS } from "../../shared/constant";
import TransactionsTable from "./TransactionsTable";
import SetupHeader from "../../components/SetupHeader";
import CustomButton from "../../components/CustomButton";
// Component Input Props Declaration
// Global Scope Variable and Constant Declarations

const CustomTablePagination = ({
  page,
  transactionsCount,
  rowsPerPage,
}: any) => {
  const startCount = (page - 1) * rowsPerPage + 1;
  const endCount = Math.min(page * rowsPerPage, transactionsCount);

  return (
    <Typography sx={{ fontSize: "10px", mt: -3 }}>
      {`Showing ${startCount} to ${endCount} of ${transactionsCount} entries`}
    </Typography>
  );
};

/**
 * Functional component to manage the container for transactions table.
 * @returns {JSX.Element} The JSX element containing the transactions table container.
 */
const TransactionsTableContainer = () => {
  // Destructuring necessary variables and functions from the useTransactions hook

  const {
    setRowsPerPage,
    rowsPerPage,
    priorPeriodLibrary,
    page,
    setPage,
    transactionsCount,
    exportToCSV,
  }: any = useTransactions();
  // Function to handle page change in pagination
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  /**
   * Handles the change of rows per page in pagination.
   * @param {React.ChangeEvent<HTMLInputElement>} event The change event from the input element.
   */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <SetupHeader pageTitle={"Transactions"} backURL={"/"}>
          <CustomButton
            text={"Download"}
            sx={buttonStyle}
            icon={<MdOutlineFileDownload />}
            onClick={() => exportToCSV()}
          />
        </SetupHeader>
      </Grid>
      <Grid item xs={12}>
        <TransactionsTable priorPeriodLibrary={priorPeriodLibrary} />
        {priorPeriodLibrary?.length > 0 && (
          <TablePagination
            rowsPerPageOptions={ROW_PER_PAGE_OPTIONS}
            count={transactionsCount ? transactionsCount : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{
              backgroundColor: "white",
              padding: 0,
              borderBottom: 0,
            }}
            component="div"
            sx={tablePagination}
            labelRowsPerPage={<span>Row per page</span>}
            labelDisplayedRows={() => (
              <span>{`${page + 1} of ${Math.ceil(
                transactionsCount / rowsPerPage
              )} Page`}</span>
            )}
          />
        )}
        <CustomTablePagination
          page={page + 1}
          transactionsCount={transactionsCount}
          rowsPerPage={rowsPerPage}
        />
      </Grid>
    </Grid>
  );
};

// Customized system styles can be inserted into a Material-UI component using the sx property
const { tablePagination, buttonStyle } = muiCustomization;
export default TransactionsTableContainer;
