import { Fragment, memo, useEffect, useState } from "react";
// Import MUI components
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// Import MUI Icons
import { ExpandLess, ExpandMore } from "@mui/icons-material";
// Import External Libraries
import { Link, useLocation, useNavigate } from "react-router-dom";
import { muiCustomization } from "../style/common";

// Import constants, functions and services
// Import Custom Styles
// import { muiCustomization } from "styles/common";
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
interface SideBarItemProps {
  sidebarItem?: any;
}

const SideBarItem = ({ sidebarItem }: SideBarItemProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  //Router function to access current path location
  const router: any = useLocation();
  //To implement navigation functionality
  const navigate = useNavigate();
  //importing customization classes for mui components
  const { sidebarActiveMenu, iconStyle, activeTextStyle, textStyle } =
    muiCustomization;

  useEffect(() => {
    if (
      router.pathname === sidebarItem.path ||
      sidebarItem?.children?.some(
        (child: any) => child.path === router.pathname
      )
    ) {
      setOpen(true);
    }
  }, [sidebarItem]);

  function handleClick() {
    if (sidebarItem.children) {
      setOpen(!open);
      navigate(sidebarItem.path);
      return;
    }
    sidebarItem.path && navigate(sidebarItem.path);
  }

  function renderItem(text: any, index: any) {
    return (
      <Link to={text?.path} className="link" key={index}>
        <ListItem
          key={`${text?.name}:${text?.id}`}
          disablePadding
          sx={{ textAlign: "center" }}
        >
          <ListItemButton
            sx={
              router.pathname === text.path
                ? { ...sidebarActiveMenu }
                : { mx: 1, my: 0.6, py: 0.6 }
            }
          >
            <ListItemIcon style={{ ...iconStyle, fontSize: 12 }}>
              {text?.icon}
            </ListItemIcon>
            <ListItemText
              sx={router.pathname === text.path ? activeTextStyle : textStyle}
              primary={text?.name}
            />
          </ListItemButton>
        </ListItem>
      </Link>
    );
  }

  // Wrap the return value with useMemo to memoize the result
  return (
    <Fragment>
      <ListItem
        disablePadding
        sx={{ textAlign: "center", borderRadius: 1, mb: 0.8 }}
        onClick={handleClick}
      >
        <ListItemButton
          onClick={handleClick}
          sx={
            router.pathname === sidebarItem.path
              ? { ...sidebarActiveMenu, px: 1.5 }
              : { mx: 1, px: 1, py: 0.6 }
          }
        >
          <ListItemIcon style={iconStyle}>{sidebarItem?.icon}</ListItemIcon>
          <ListItemText
            sx={
              router.pathname === sidebarItem.path ? activeTextStyle : textStyle
            }
            primary={sidebarItem?.name}
          />
          {sidebarItem?.children && (
            <Fragment>
              {open ? (
                <ExpandLess sx={{ fontSize: 12 }} />
              ) : (
                <ExpandMore sx={{ fontSize: 12 }} />
              )}
            </Fragment>
          )}
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ background: "#F7EFD1" }}>
        {open && (
          <Collapse in={open} timeout={200} sx={{ width: "100%" }}>
            <List sx={{ padding: 0, pl: 2 }}>
              {sidebarItem?.children?.map((child: any, index: number) =>
                renderItem(child, index)
              )}
            </List>
          </Collapse>
        )}
      </ListItem>
    </Fragment>
  );
};

export default memo(SideBarItem);
