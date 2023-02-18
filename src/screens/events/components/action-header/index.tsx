// Modules
import { useContext } from 'react';
import { Stack, Typography } from '@mui/material';

// Components
import FlexStyle from '../../../../styles/flex';
import BlueButton from '../../../../components/_buttons/blue-button';

// Contexts
import { DialogContext } from '../../../../contexts/dialog-context';

// Icons
import AddIcon from '@mui/icons-material/Add';

export default function ActionHeader () {
  const { setWhichDialogIsOpen } = useContext(DialogContext);
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Eventos</Typography>
      <BlueButton startIcon={<AddIcon/>} variant='contained' size='small' onClick={() => setWhichDialogIsOpen('submit-event')}>Agregar Evento</BlueButton>
    </Stack>
  )
}
