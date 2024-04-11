import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const palette = {
  primary: {
    main: "#F4CE46",
    contrastText: "#fff",
  },
  secondary: {
    main: "#12344D",
    light: "#5B5E63",
  },
  light: {
    main: "#DFDFDF",
  },
  dark: {
    main: "#000000",
  },
  highlight: {
    main: "#EABD1D",
  },
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: ["InterLight", "sans-serif"].join(","),
    fontSize: 10,
    htmlFontSize: 10,
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 10,
          fontFamily: "InterSemibold",
          marginBottom: 8,
          color: palette.dark.main,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 10,
          fontWeight: "bold",
          "& ::placeholder": {
            fontSize: 10,
            fontWeight: "normal",
          },
          "& .Mui-disabled.MuiInputBase-input": {
            // color: "#000000de",
            cursor: "no-drop !important",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 10,
          boxShadow: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.light.main,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          border: 0,
          boxShadow: "none",
          textTransform: "none",
          "&.Mui-disabled": {
            opacity: 1,
            cursor: "no-drop !important",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: 10,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          fontSize: 10,
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 10,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 10,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontSize: 10,
        },
        option: {
          fontSize: 10,
        },
        noOptions: {
          fontSize: 10,
        },
      },
    },
  },
});

export default theme;
