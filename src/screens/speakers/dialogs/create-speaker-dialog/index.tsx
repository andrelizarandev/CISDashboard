// Modules
import { Stack, TextField } from '@mui/material';

// Components
import BlueButton from '../../../../components/_buttons/blue-button';
import ImageLoader from '../../../../components/_shared/image-loader';
import DialogStack from '../../../../components/_shared/dialog-stack';

// Hooks
import useGlobalContexts from '../../../../contexts';
import useCleanAndClose from '../../functions/cleanAndClose';

// Style
import FlexStyle from '../../../../styles/flex';

export default function CreateSpeakerDialog () {
  const { dialogContext } = useGlobalContexts();
  const { whichDialogIsOpen } = dialogContext;
  return (
    <DialogStack 
      title='Crear Ponente'
      isOpen={whichDialogIsOpen === 'submit-speaker'}
    >
      <Form/>
      <ActionButtons/>
    </DialogStack>
  )
}

function Form () {
  return (
    <>
      <TextField variant='filled' size='small' label='Nombres'/>
      <TextField variant='filled' size='small' label='Apellidos'/>
      <TextField variant='filled' size='small' label='Descripción Corta'/>
      <TextField variant='filled' size='small' label='Descripción Larga' rows={3} multiline/>
      <ImageLoader title='Cargar Foto de Perfil'/>
    </>
  )
}

function ActionButtons () {
  const { cleanAndCloseSubmitSpeaker } = useCleanAndClose();
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap2}>
      <BlueButton onClick={cleanAndCloseSubmitSpeaker}>Cancelar</BlueButton>
      <BlueButton variant='contained'>Guardar</BlueButton>
    </Stack>
  )
}