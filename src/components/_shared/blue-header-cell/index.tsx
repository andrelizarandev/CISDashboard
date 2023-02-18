// Modules
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

// Colors
import { primaryColor } from '../../../utils/colors';

const BlueHeaderCell = styled(TableCell)(() => ({
  textTransform:'uppercase',
  whiteSpace:'pre', 
  backgroundColor: primaryColor,
  color: 'white',
  fontSize: 14,
}));

export default BlueHeaderCell;