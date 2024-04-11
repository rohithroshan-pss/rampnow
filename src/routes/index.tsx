import { Suspense, lazy } from "react";

// Import MUI components

// Import MUI Icons
// Import External Libraries
import { Route, Routes } from "react-router-dom";
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components

// Component Input Props Declaration
// Global Scope Variable and Constant Declarations

const Layout = lazy(() => import("../layouts/AppLayout"));

const Dashboard = lazy(() => import("../pages/DashBoard"));
const Transactions = lazy(() => import("../pages/Transactions"));
const Loader = lazy(() => import("../components/Loader"));

const index = () => {
  return (
    <Suspense fallback={<Loader />}>
      {/* Nested Routes component for defining nested routes */}
      <Routes>
        {/* Route for the root path */}
        <Route path="/" element={<Layout />}>
          {/* Nested Route for the root path, rendering Dashboard component */}
          <Route path="/" element={<Dashboard />} />
          {/* Nested Route for the transactions path, rendering Transactions component */}
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default index;
