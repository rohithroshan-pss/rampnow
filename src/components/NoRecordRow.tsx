// Import MUI components
import { TableCell, TableRow } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
interface NoRecordRowProps {
  title: string;
  columns: number;
}

/**
 * Component for rendering a table row with a single cell for displaying a "No Record" message.
 *
 * @param {NoRecordRowProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
const NoRecordRow = ({ title, columns }: NoRecordRowProps): JSX.Element => {
  return (
    <TableRow>
      <TableCell
        component="th"
        scope="row"
        align="center"
        colSpan={columns}
        sx={{
          fontWeight: "bold",
          color: "#475867",
        }}
      >
        {title}
      </TableCell>
    </TableRow>
  );
};

export default NoRecordRow;
