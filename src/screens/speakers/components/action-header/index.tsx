// Modules
import { Stack, Typography } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';

// Hooks
import useGetGlobalContexts from '../../../../contexts';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Style
import FlexStyle from '../../../../styles/flex';

export default function ActionHeader () {
  const { dialogContext } = useGetGlobalContexts();
  const { setWhichDialogIsOpen } = dialogContext;
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Ponentes</Typography>
      <BlueButton variant='contained' startIcon={<AddIcon/>} onClick={() => setWhichDialogIsOpen('submit-speaker')}>Agregar Ponente</BlueButton>
    </Stack>
  )
}
