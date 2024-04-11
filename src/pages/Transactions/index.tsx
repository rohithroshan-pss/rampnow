// Import MUI components
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components

import { TransactionsProvider } from "./PriorPeriodLibraryContext";
import Transactions from "./Transactions";

// Component Input Props Declaration
// Global Scope Variable and Constant Declarations
const index = () => {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  );
};

export default index;
