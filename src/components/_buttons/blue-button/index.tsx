// Modules
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

// Colors
import { greyA, greyB, primaryColor } from '../../../utils/colors';

// Colors
const BlueButton = styled(Button)<ButtonProps>(({
  paddingX:16,
  fontSize:'12px',
  '&.MuiButton-contained': {
    '&.Mui-disabled': {
      backgroundColor:greyB,
      color:greyA
    }
  },
  '&.MuiButton-text': {
    color:primaryColor,
    '&.Mui-disabled': {
      color:greyA
    }
  }
}));

export default BlueButton;