// Modules
import { Stack, Typography } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';

// Hooks
import useGlobalContexts from '../../../../contexts';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Style
import FlexStyle from '../../../../styles/flex';

export default function ActionHeader () {
  const { dialogContext } = useGlobalContexts();
  const { setWhichDialogIsOpen } = dialogContext;
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Subeventos</Typography>
      <BlueButton startIcon={<AddIcon/>} variant='contained' onClick={() => setWhichDialogIsOpen('submit-subevent')}>Agregar Subevento</BlueButton>
    </Stack>
  )
}