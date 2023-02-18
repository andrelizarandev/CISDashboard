// Modules
import { Stack } from '@mui/material';

// Components
import BlueButton from '../../_buttons/blue-button';
import DialogStack from '../../_shared/dialog-stack';

// Hooks
import useGlobalContexts from '../../../contexts';

// Style
import FlexStyle from '../../../styles/flex';

export default function ImageDialog () {
  const { dialogContext } = useGlobalContexts();
  const { imageToView } = dialogContext;
  return (
    <DialogStack 
      title='Visualizar'
      isOpen={imageToView != null}
    >
      <img src={imageToView!!} style={{ height:'200px' }}/>
      <ActionButtons/>
    </DialogStack>
  )
}

function ActionButtons () {
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap2}>
      <BlueButton>Ok</BlueButton>
    </Stack>
  )
}