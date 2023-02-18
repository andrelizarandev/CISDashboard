// Modules
import { Button, Stack, Typography } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Style
import FlexStyle from '../../../../styles/flex';

export default function ActionHeader () {
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Ponentes</Typography>
      <Button size='small' variant='contained' startIcon={<AddIcon/>}>Agregar Ponente</Button>
    </Stack>
  )
}
