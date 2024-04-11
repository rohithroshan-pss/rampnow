// Import MUI components
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
import { NO_DATA_TO_DISPLAY } from "../../shared/constant";

import { useTransactions } from "./PriorPeriodLibraryContext";
// Import Custom Styles
import { muiCustomization } from "../../style/common";
// import NoRecordRow from "components/NoRecordRow";
// import { NO_DATA_TO_DISPLAY } from "shared/constant";

// Import Customized Components
import NoRecordRow from "../../components/NoRecordRow";
import CustomButton from "../../components/CustomButton";
// Component Input Props Declaration
// Global Scope Variable and Constant Declarations

/**
 * Functional component for displaying the transactions table.
 * @param {object} priorPeriodLibrary The data array for prior period library.
 * @returns {JSX.Element} The JSX element containing the transactions table.
 */
const TransactionsTable = ({ priorPeriodLibrary }: any) => {
  //Consuming the context values
  const { tableHeadings }: any = useTransactions();

  return (
    <TableContainer sx={{ tableContainer, ...tableScrollContainer }}>
      <Table>
        {/* Header */}
        <TableHead>
          <TableRow sx={tableHeader}>
            {tableHeadings?.map((header: any) => (
              <TableCell
                sx={{
                  color: "#5B5E63",
                  fontFamily: "InterBold",
                  minWidth: header.minWidth,
                  textAlign: header.isCenter ? "center" : "left",
                }}
                key={header.index}
              >
                {header.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body Header */}
        <TableBody>
          {priorPeriodLibrary?.length === 0 ? (
            <NoRecordRow title={NO_DATA_TO_DISPLAY} columns={3} />
          ) : (
            priorPeriodLibrary?.map((data: any) => (
              <TableRow key={data.id} sx={configTableDataStyle}>
                {/* id */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.id}
                </TableCell>

                {/* author name */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.author}
                </TableCell>
                {/* country  */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.country}
                </TableCell>
                {/* language  */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.language}
                </TableCell>
                {/* link  */}
                <TableCell sx={{ fontFamily: "InterSemibold" }} align="center">
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <CustomButton text={"Visit"} sx={buttonStyle} />
                  </a>
                </TableCell>
                {/* pages  */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.pages}
                </TableCell>
                {/* title  */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.title}
                </TableCell>

                {/* year */}
                <TableCell sx={{ fontFamily: "InterSemibold" }}>
                  {data.year}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Customized system styles can be inserted into a Material-UI component using the sx property
const {
  buttonStyle,
  tableHeader,
  tableContainer,
  configTableDataStyle,
  tableScrollContainer,
} = muiCustomization;
export default TransactionsTable;
