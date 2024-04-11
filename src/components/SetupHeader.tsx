import { Fragment, ReactElement, useEffect, useState } from "react";
// Import MUI components
import { Box, Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
// Import MUI Icons
import { AiOutlineExclamationCircle } from "react-icons/ai";
// Import External Libraries
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { muiCustomization } from "../style/common";
// Import constants, functions and services
// Import Custom Styles
// import {muiCustomization} from "styles/common";
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
interface SetupHeaderProps {
  children?: React.ReactNode;
  pageTitle?: string;
  breadcrumbItems?: Array<any>;
  backURL?: string;
  pageInfo?: boolean;
  hasErrors?: boolean;
  customTitleIcon?: string;
  onTooltipChange?: Function | null;
  routeState?: any;
  openErrorInfo?: Function | null;
  handleState?: Function;
  handleBack?: Function | null;
  styles?: any;
  skipTitle?: boolean;
}

/**
 * Component for rendering a setup header with various options.
 *
 * @param {SetupHeaderProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
const SetupHeader = ({
  children,
  pageTitle,
  breadcrumbItems = [],
  backURL = "",
  pageInfo = false,
  onTooltipChange = null,
  hasErrors = false,
  customTitleIcon = "",
  routeState,
  handleState,
  handleBack = null,
  styles = {},
  skipTitle = false,
}: SetupHeaderProps): ReactElement => {
  const [pageRouteState, setPageRouteState] = useState(null);
  //Navigation hook
  const navigate = useNavigate();
  //Mui components customization classes
  useEffect(() => {
    if (!isEmpty(routeState)) setPageRouteState(routeState);
  }, [routeState]);

  function handleBackRoute() {
    /* On backRoute some page we have to pass routeState
                    check whether pageRouteState is passed through props isEmpty or not */
    if (isEmpty(pageRouteState)) navigate(backURL);
    else navigate(backURL, { state: routeState });

    /**
     *  In some pages we handle two components in same route through hide and show
     *  thus we have to false any one component on clicking back button
     *  */

    if (handleState)
      // check whether function is passed through props, if defined invoke else skip
      handleState();
  }

  // Handle when tooltip is pressed
  const handleTooltip = () => onTooltipChange && onTooltipChange();

  return (
    <Fragment>
      {!skipTitle && (
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      )}
      <Paper sx={{ ...paperPadding, ...styles }} elevation={0}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box
              sx={{
                display: "flex",
                alignItems:
                  (backURL || customTitleIcon) && breadcrumbItems.length === 0
                    ? "center"
                    : "start",
              }}
            >
              {/* Back URL */}
              {(backURL || handleBack) && (
                <Box
                  component="img"
                  src="../public/setup-entity.svg"
                  width={18}
                  alt="arrow"
                  style={{
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleBack ? handleBack() : handleBackRoute()
                  }
                />
              )}
              {/* Custom Title Icon */}
              {customTitleIcon && (
                <Box
                  width={26}
                  height={26}
                  style={{
                    marginRight: "8px",
                    borderRadius: "50%",
                    textAlign: "center",
                    backgroundColor: "#DBE1E4",
                  }}
                >
                  <Box
                    component="img"
                    src={customTitleIcon}
                    width={15}
                    alt="title-icon"
                  />
                </Box>
              )}
              <Box>
                {/* Page Title & Tooltip */}
                <Stack direction="row" alignItems="center">
                  <Box style={{ maxWidth: 250 }}>
                    <Typography
                      sx={{
                        ...pageTitleStyle,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "18px",
                      }}
                    >
                      {pageTitle}
                    </Typography>
                  </Box>
                  {pageInfo && (
                    <Tooltip title={pageTitle}>
                      <Box
                        sx={{ cursor: "pointer", mt: 0.5 }}
                        onClick={handleTooltip}
                      >
                        <AiOutlineExclamationCircle
                          style={hasErrors ? titleErrorIcon : titleIcon}
                        />
                      </Box>
                    </Tooltip>
                  )}
                </Stack>

                {/* Navigation Breadcrumbs */}
                <Box>
                  <Typography>
                    {breadcrumbItems.map((item: any, index: number) => {
                      return breadcrumbItems.length === index + 1 ? (
                        <Box
                          component="span"
                          key={item.name}
                          sx={customStyles.activeRoute}
                        >
                          {`> ${item.name}`}
                        </Box>
                      ) : (
                        <Box
                          component="span"
                          key={item.name}
                          sx={customStyles.parentRoute}
                          onClick={() =>
                            item.onClick
                              ? item.onClick()
                              : item?.path && navigate(item.path)
                          }
                        >
                          {item.name}
                          {breadcrumbItems.length - 1 > index + 1
                            ? " > "
                            : null}
                        </Box>
                      );
                    })}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

// Customized system styles can be inserted into a Material-UI component using the sx property
const { pageTitle: pageTitleStyle, paperPadding } = muiCustomization;

const customStyles = {
  activeRoute: {
    color: "#000000",
    fontSize: "10px",
    fontFamily: "InterSemibold",
    ml: 1,
  },
  parentRoute: {
    color: "#727272",
    fontSize: "10px",
    cursor: "pointer",
  },
};

const titleIcon = {
  color: "#676E7A",
  marginLeft: "4px",
  width: "20px",
  height: "14px",
};

const titleErrorIcon = {
  color: "red",
  marginLeft: "4px",
  width: "20px",
  height: "15px",
};

export default SetupHeader;
