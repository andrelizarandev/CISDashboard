// Modules
import { Button, Grid, Stack, TextField } from '@mui/material';

// Components
import GridXS0MD6LG8 from '../../components/_grids/grid-xs0-md6-lg8';
import GridXS12MD6LG4 from '../../components/_grids/grid-xs12-md6-lg4';
import PaperStack from '../../components/_shared/paper-stack';

// Styles
import LogInStyles from './styles';

export default function LogInScreen () {
  return (
    <Grid container>
      <ImageContainer/>
      <FormContainer/>
    </Grid>
  )
}

function ImageContainer () {
  return (
    <GridXS0MD6LG8>
      <Stack sx={LogInStyles.ImgContainer}/>
    </GridXS0MD6LG8>
  )
}

function FormContainer () {
  return (
    <GridXS12MD6LG4>
      <Stack sx={LogInStyles.FormContainer}>
        <Stack sx={LogInStyles.FormPaddingContainer}>
          <FormCard/>
        </Stack>
      </Stack>
    </GridXS12MD6LG4>
  )
}

function FormCard () {
  return (
    <PaperStack title='Iniciar Sesión'>

      <TextField 
        variant='filled'
        size='small'
        name='' 
        label='Nombre de Usuario' 
      />

      <TextField 
        variant='filled'
        size='small'
        name='' 
        label='Contraseña' 
      />

      <Button variant='contained' size='small'>Iniciar Sesión</Button>

    </PaperStack>
  )
}