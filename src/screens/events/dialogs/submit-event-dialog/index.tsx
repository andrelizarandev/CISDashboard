// Modules
import { useContext } from 'react';
import { Stack, TextField } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';
import DialogStack from '../../../../components/_shared/dialog-stack';
import ImageLoader from '../../../../components/_shared/image-loader';

// Contexts
import { DialogContext } from '../../../../contexts/dialog-context';

// Style
import FlexStyle from '../../../../styles/flex';

export default function SubmitEventDialog () {
  const { whichDialogIsOpen } = useContext(DialogContext);
  return (
    <DialogStack 
      title='Agregar Evento'
      isOpen={whichDialogIsOpen === 'submit-event'}
      onSubmit={() => {}}
      size='sm'  
    >
      <Form/>
      <ActionButtons/>
    </DialogStack>
  )
}

function Form () {
  return (
    <>
      <TextField label='Nombre' variant='filled' size='small'/>
      <TextField type='date' InputLabelProps={{ shrink: true }} label='Fecha de Inicio' variant='filled' size='small'/>
      <TextField type='date' InputLabelProps={{ shrink: true }} label='Fecha de Finalización' variant='filled' size='small'/>
      <ImageLoader title='Cargar Poster de Evento'/>
    </>
  )
}

function ActionButtons () {
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap3}>
      <BlueButton variant='text'>Cancelar</BlueButton>
      <BlueButton variant='contained'>Guardar</BlueButton>
    </Stack>
  )
}