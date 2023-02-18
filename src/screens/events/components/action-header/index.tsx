// Modules
import { Button, Stack, Typography } from '@mui/material';

// Components
import FlexStyle from '../../../../styles/flex';

// Icons
import AddIcon from '@mui/icons-material/Add';

export default function ActionHeader () {
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Eventos</Typography>
      <Button startIcon={<AddIcon/>} variant='contained' size='small'>Agregar Evento</Button>
    </Stack>
  )
}
