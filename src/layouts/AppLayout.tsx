import { Box } from "@mui/material";

// import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import { drawerWidth } from "../shared/constant";

const AppLayout = () => {
  return (
    <Box>
      {/* Header component */}
      <Sidebar />

      {/* Main component */}
      <Box
        component="main"
        sx={{
          bgcolor: "inherit",
          marginLeft: `${drawerWidth}px`,
          minHeight: "100vh",
        }}
      >
        {/* Rendering of child components */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
