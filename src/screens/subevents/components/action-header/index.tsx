// Modules
import { Stack, Typography } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Style
import FlexStyle from '../../../../styles/flex';

export default function ActionHeader () {
  return (
    <Stack sx={FlexStyle.RowJustifyBetweenAlignCenter}>
      <Typography variant='subtitle2' textTransform='uppercase'>Acciones de Subeventos</Typography>
      <BlueButton startIcon={<AddIcon/>} variant='contained'>Agregar Subevento</BlueButton>
    </Stack>
  )
}