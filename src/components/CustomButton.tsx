// Import MUI components
import { Box, Button, ButtonProps } from "@mui/material";
// Import MUI components
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
// @ts-ignore
interface CustomButtonProps extends ButtonProps {
  text?: string | any;
  style?: any;
  buttonType?: "button" | "submit" | "reset";
  buttonVariant?: "text" | "outlined" | "contained";
  onPress?: () => void;
  icon?: React.ReactNode;
  iconAlign?: "left" | "right";
  rest?: any;
  component?: string;
}

/**
 * Custom button component.
 *
 * @param {CustomButtonProps} props - The button component props.
 * @returns {JSX.Element} The custom button component.
 */
const CustomButton = ({
  text,
  style,
  buttonType,
  buttonVariant,
  onPress,
  icon,
  iconAlign = "left",
  ...rest
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      variant={buttonVariant ?? "contained"}
      sx={style}
      type={buttonType ?? "button"}
      onClick={onPress}
      disableElevation
      size="small"
      {...rest}
    >
      {/* Render icon if present along with text */}
      {iconAlign === "left" && icon && (
        <Box sx={{ pr: 0.8, pb: 0.1, display: "flex", alignItems: "center" }}>
          {icon}
        </Box>
      )}
      {text}
      {iconAlign === "right" && icon && (
        <Box sx={{ pl: 0.8, pb: 0.1, display: "flex", alignItems: "center" }}>
          {icon}
        </Box>
      )}
    </Button>
  );
};

export default CustomButton;
