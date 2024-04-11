import { Fragment } from "react";
// Import MUI components
import { Paper } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles

import { muiCustomization } from "../../style/common";
// Import Customized Components
import TransactionsTableContainer from "./TransactionsTableContainer";

// Component Input Props Declaration
// Global Scope Variable and Constant Declarations

/**
 * Functional component for displaying transactions.
 * @returns {JSX.Element} The JSX element containing the transactions view.
 */
const Transactions = () => {
  return (
    <Fragment>
      {/*  Body */}
      <Paper sx={dualPaperPadding} elevation={0}>
        {/*  Table  */}
        <TransactionsTableContainer />
      </Paper>
    </Fragment>
  );
};

// Customized system styles can be inserted into a Material-UI component using the sx property
const { dualPaperPadding } = muiCustomization;

export default Transactions;
