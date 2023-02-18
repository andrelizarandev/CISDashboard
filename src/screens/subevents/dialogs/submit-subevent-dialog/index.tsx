// Modules
import { Stack, TextField } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';
import ImageLoader from '../../../../components/_shared/image-loader';
import DialogStack from '../../../../components/_shared/dialog-stack';
import SimpleSelect from '../../../../components/_selectors/simple-select';
import MultipleSelect from '../../../../components/_selectors/multiple-select';

// Hooks
import useGlobalContexts from '../../../../contexts';
import useCleanAndClose from '../../functions/cleanAndClose';

// Style
import FlexStyle from '../../../../styles/flex';

export default function SubmitSubeventDialog () {
  const { dialogContext } = useGlobalContexts();
  const { whichDialogIsOpen } = dialogContext;
  return (
    <DialogStack 
      onSubmit={() => {}}
      size='sm'
      title='Agregar Subevento'
      isOpen={whichDialogIsOpen === 'submit-subevent'}
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
      <TextField type='date' label='Fecha de Inicio' variant='filled' size='small' InputLabelProps={{ shrink:true }}/>
      <TextField type='date' label='Fecha de Finalización' variant='filled' size='small' InputLabelProps={{ shrink:true }}/>
      <SimpleSelect label='Evento al que pertenece' name='belongsTo'/>
      <MultipleSelect label='Ponentes que Participarán' name='speakers'/>
      <ImageLoader title='Cargar Poster del Subevento'/>
    </>
  )
}

function ActionButtons () {
  const { cleanAndCloseSubmitSubevent } = useCleanAndClose();
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap3}>
      <BlueButton onClick={cleanAndCloseSubmitSubevent}>Cancelar</BlueButton>
      <BlueButton variant='contained'>Guardar</BlueButton>
    </Stack>
  )
}
