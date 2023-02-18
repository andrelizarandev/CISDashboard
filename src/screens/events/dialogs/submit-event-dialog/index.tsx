// Modules
import { Stack, TextField } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';
import DialogStack from '../../../../components/_shared/dialog-stack';
import ImageLoader from '../../../../components/_shared/image-loader';

// Hooks
import useGetContexts from '../../functions';
import useGetGlobalContexts from '../../../../contexts';

// Style
import FlexStyle from '../../../../styles/flex';

export default function SubmitEventDialog () {
  const { dialogContext } = useGetGlobalContexts();
  const { whichDialogIsOpen } = dialogContext;
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
  const { useCleanAndClose } = useGetContexts()
  const { cleanAndCloseSubmitEvent } = useCleanAndClose();
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap3}>
      <BlueButton variant='text' onClick={cleanAndCloseSubmitEvent}>Cancelar</BlueButton>
      <BlueButton variant='contained'>Guardar</BlueButton>
    </Stack>
  )
}