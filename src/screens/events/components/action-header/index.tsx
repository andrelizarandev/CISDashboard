// Modules
import { Stack, Typography } from '@mui/material';

// Components
import FlexStyle from '../../../../styles/flex';
import BlueButton from '../../../../components/_buttons/blue-button';

// Hook
import useGetGlobalContexts from '../../../../contexts';

// Icons
import AddIcon from '@mui/icons-material/Add';

export default function ActionHeader () {
  const { dialogContext } = useGetGlobalContexts();;
  const { setWhichDialogIsOpen } = dialogContext;
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Eventos</Typography>
      <BlueButton startIcon={<AddIcon/>} variant='contained' onClick={() => setWhichDialogIsOpen('submit-event')}>Agregar Evento</BlueButton>
    </Stack>
  )
}
