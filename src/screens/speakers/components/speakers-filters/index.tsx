// Modules
import { Stack, TextField } from '@mui/material';

// Components
import PaperStack from '../../../../components/_shared/paper-stack';

// Style
import FlexStyle from '../../../../styles/flex';

export default function SpeakersFilters () {
  return (
    <PaperStack title='Filtrar Ponentes'>
      <Stack sx={FlexStyle.RowAlignCenterColumnGap2}>

        <TextField 
          size='small' 
          variant='filled' 
          label='Nombre'
        />

        <TextField 
          size='small' 
          variant='filled' 
          label='Apellidos'
        />

      </Stack>
    </PaperStack>
  )
}
