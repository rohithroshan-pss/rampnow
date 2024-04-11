//Customizing mui components styles json

import { drawerWidth } from "../shared/constant";

//Sidebar component styling Starts
const iconStyle = {
  color: "#000000",
  fontSize: "0.96rem",
  minWidth: "30px",
};

const textStyle = {
  color: "white",
  "& .MuiTypography-root ": {
    fontWeight: "fontWeightBold",
    fontSize: "10px",
  },
};

const activeTextStyle = {
  color: "white",
  "& .MuiTypography-root ": {
    fontWeight: "fontWeightBold",
    fontSize: "12px",
  },
};

//sidebar width

const sidebarStyle = {
  width: drawerWidth,
  flexShrink: 0,
  border: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    background: "#020027",
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#c1c1c1",
      borderRadius: "10px",
    },
  },
};

const sidebarActiveMenu = {
  mr: 1,
  my: 0.6,
  py: 0.4,
  fontWeight: "700",
  fontSize: "18px",
  color: "white",
};
//Sidebar component styling Ends

//Header component styling Starts
const breadcrumbIcon = {
  background: "rgba(234, 189, 29, 0.2)",
  color: "#EABD1D",
  borderRadius: "50%",
  width: "1.8rem",
  height: "1.7rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  mr: 1,
};

const corporateTitle = {
  background: "#F6F7F9",
  color: "#434343",
  fontFamily: "InterSemibold",
  px: 2,
  py: 1,
  borderRadius: "1rem",
  fontSize: "12px",
};
//Header component styling Ends

//Common components Styling

const pageTitle = {
  color: "#1B232C",
  fontFamily: "InterSemibold",
  fontSize: 12,
};

const modalTitle = {
  color: "#1B232C",
  fontFamily: "InterBold",
  fontSize: "14px",
  pt: "4px",
  pl: "5px",
};

const buttonStyle = {
  background: "#12344D",
  textTransform: "none",
  ": hover": {
    background: "#12344D",
  },
  fontSize: "10px",
};

const lightButtonStyle = {
  background: "#F6F7F9",
  fontSize: 10,
  color: "secondary.primary",
  fontWeight: "bold",
};

const cancelButtonStyle = {
  background: "#FFFFFF",
  color: "#12344D",
  textTransform: "none",
  px: 3,
  fontSize: 10,
  fontFamily: "InterSemibold",
  ": hover": {
    background: "#FFFFFF",
    color: "#12344D",
    border: "1px solid #12344D",
  },
  border: "1px solid #12344D",
};

const submitButtonStyle = {
  background: "#12344D",
  textTransform: "none",
  px: 3,
  fontSize: 10,
  ": hover": {
    background: "#12344D",
  },
};

const saveButtonStyle = {
  background: "#2A5E85",
  textTransform: "none",
  px: 3,
  ": hover": {
    background: "#2A5E85",
  },
};

const deleteButton = {
  background: "#E10202",
  textTransform: "none",
  color: "#FFFFFF",
  px: 3,
  ": hover": {
    background: "#E10202",
  },
};

const formErrMsg = {
  "&.MuiFormHelperText-root": {
    marginLeft: "1px",
    color: "red",
  },
};

//Modal Styling
const modalStyle = {
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: "600px", // Set your width here
      // height: "350px",
      py: 2.5,
      px: 4,
      pt: 1,
    },
  },
};

const paperPadding = { px: 3, pt: 1.5, pb: 1.5 }; //main header paper styling
const dualPaperPadding = { mt: 1.5, py: 2, pr: 3, px: 3 }; //sub paper styling
const subPaperPadding = { pl: 1 };
const tableHeader = {
  background: "#F4F4F4",
  "& .MuiTableCell-root": { paddingY: "6px" },
};

// table container styles

const tableContainer = {
  mt: 1,
  borderRadius: 1,
  border: (theme: any) => `1px solid ${theme.palette.light.main}`,
};

const datePicker = {
  datePicker: {
    "& .MuiSvgIcon-root": {
      width: "0.8em",
      height: "0.8em",
    },
  },
};

const configTableDataStyle = {
  color: "#262A41",
  fontFamily: "InterSemibold",
  // fontSize: "14px",
};

const tableScrollContainer = {
  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#c1c1c1",
    borderRadius: "10px",
  },
};

const tagChip = {
  background: "#F7EFD1",
  minWidth: "150px",
  textAlign: "center",
  p: 1,
  color: "#262A41",
  borderRadius: "5px",
  fontSize: 10,
  fontWeight: "bold",
};

const tablePagination = {
  "&.MuiTablePagination-root": {
    overflow: "initial",
  },
  "& .MuiTablePagination-selectLabel,	& .MuiTablePagination-select, & .MuiTablePagination-displayedRows":
    {
      fontSize: "10px",
      fontFamily: "InterSemibold",
      color: "#183247",
      fontWeight: "500",
    },
  "& .MuiSvgIcon-root": {
    width: "20px",
    height: "20px",
  },
  "& .MuiToolbar-root": {
    paddingLeft: 1,
  },
  "& .MuiInputBase-root": {
    marginRight: 1,
    background: "#F4F4F4",
  },
  "& .MuiTablePagination-actions": {
    marginLeft: 1,
  },
  "& .MuiTablePagination-selectIcon": {
    paddingTop: 0.5,
  },
};

const accordionStyles = {
  accordionStyle: {
    "&.MuiAccordion-root": {
      padding: "0px !important",
      boxShadow: "none",
    },
    "& .MuiButtonBase-root": {
      padding: "0px !important",
    },
  },
  accordionSummaryStyle: {
    flexDirection: "row-reverse",
    display: "flex",
    alignItems: "flex-start",
    "& .MuiAccordionSummary-root": {
      padding: "0px !important",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "white",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      transform: "rotate(270deg)",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(360deg)",
    },
    "& .MuiAccordionSummary-content": {
      margin: "0px !important",
    },
  },
  accordionActivityText: {
    width: 300,
    paddingTop: 4,
  },
  accordionEntitySelect: {
    marginBottom: 2,
  },
  accordionEntityHeading: {
    paddingLeft: 2,
    color: "#8F8F8F",
    fontFamily: "InterBold",
    fontSize: "12px",
  },
};

//Common SubHeader
const subHeaderFont = {
  fontSize: "12px",
  fontFamily: "InterSemibold",
  mb: 1.4,
};

const stickyHeader = {
  py: 2.5,
  position: "sticky",
  top: 0,
  zIndex: 99,
};

const stickyMenu = {
  py: 2.5,
  position: "sticky",
  left: 0,
  zIndex: 99,
};

const logText = { fontSize: 10, fontWeight: "bold", cursor: "pointer" };

const logsModalStyle = {
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: "750px", // Set your width here
      pt: 1.5,
      px: 2.5,
      pb: 2,
    },
  },
};

const tableCellData = {
  color: "#262A41",
  fontFamily: "InterMedium",
  fontSize: "10px",
};

const tableHeaderCell = {
  color: "#5B5E63",
  fontFamily: "InterSemibold",
};
const customLink = {
  color: "#12344D",
  fontFamily: "InterSemibold",
  fontSize: "10px",
  // marginTop: 1,
  textDecoration: "underline",
  cursor: "pointer",
};

const imageButton = {
  color: "secondary.main",
  fontFamily: "InterSemibold",
  fontSize: "0.625rem",
};

export const muiCustomization = {
  tableHeaderCell,
  logText,
  logsModalStyle,
  stickyHeader,
  stickyMenu,
  subHeaderFont,
  tagChip,
  configTableDataStyle,
  datePicker,
  subPaperPadding,
  deleteButton,
  dualPaperPadding,
  tableHeader,
  breadcrumbIcon,
  iconStyle,
  textStyle,
  activeTextStyle,
  sidebarActiveMenu,
  sidebarStyle,
  corporateTitle,
  pageTitle,
  buttonStyle,
  lightButtonStyle,
  formErrMsg,
  cancelButtonStyle,
  submitButtonStyle,
  modalTitle,
  modalStyle,
  saveButtonStyle,
  paperPadding,
  tableContainer,
  tableScrollContainer,
  tablePagination,
  tableCellData,
  accordionStyles,
  customLink,
  imageButton,
};
