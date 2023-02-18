// Modules
import { useContext } from 'react';
import { Stack, Typography } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';

// Contexts
import { DialogContext } from '../../../../contexts/dialog-context';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Style
import FlexStyle from '../../../../styles/flex';

export default function ActionHeader () {
  const { setWhichDialogIsOpen } = useContext(DialogContext);
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Ponentes</Typography>
      <BlueButton variant='contained' startIcon={<AddIcon/>} onClick={() => setWhichDialogIsOpen('submit-speaker')}>Agregar Ponente</BlueButton>
    </Stack>
  )
}
