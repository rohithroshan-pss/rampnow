import { Box, Drawer, List, Stack, Typography } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// import { muiCustomization } from "styles/common";
// Import Customized Components
import SideBarItem from "./SideBarItem";
// Import constants, functions and services
import { sideBar } from "../shared/constant/index";
import { muiCustomization } from "../style/common";

// import { Logo } from "../../public/assets/logo/ey.svg";
// import { sideBar } from "../shared/constant";
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * Component for rendering the sidebar navigation.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Sidebar(): JSX.Element {
  //importing customization classes for mui components
  const { sidebarStyle } = muiCustomization;

  return (
    <Drawer
      sx={{ ...sidebarStyle, ".MuiDrawer-paper": { borderRight: 0 } }}
      variant="permanent"
      anchor="left"
      className="sidebar"
    >
      <Box
        sx={{
          p: 2,
          background: "rgba(61, 47, 150, 0.05)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Box
            component="img"
            src="../public/Vector.svg"
            alt="Fina-Hq"
            sx={{ width: "20px" }}
          />
          <Typography sx={{ color: "white" }}>rampnow</Typography>
        </Stack>
      </Box>

      <List>
        {sideBar[0].map((item: any, index: number) => (
          <SideBarItem key={index} sidebarItem={item} />
        ))}
      </List>
    </Drawer>
  );
}
