// Modules
import { useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';

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
      <Button size='small' variant='contained' startIcon={<AddIcon/>} onClick={() => setWhichDialogIsOpen('submit-speaker')}>Agregar Ponente</Button>
    </Stack>
  )
}
