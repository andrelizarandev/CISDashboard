// Modules
import { Stack, TextField } from '@mui/material';
import BlueButton from '../../../../components/_buttons/blue-button';
import SimpleSelect from '../../../../components/_selectors/simple-select';

// Components
import DialogStack from '../../../../components/_shared/dialog-stack';
import ImageLoader from '../../../../components/_shared/image-loader';

// Hooks
import useGlobalContexts from '../../../../contexts';

// Style
import FlexStyle from '../../../../styles/flex';
import useCleanAndClose from '../../functions/cleanAndClose';

export default function SubmitAnnouncementDialog() {
  const { dialogContext } = useGlobalContexts();
  const { whichDialogIsOpen } = dialogContext;
  return (
    <DialogStack 
      title='Agregar Anuncio'
      isOpen={whichDialogIsOpen === 'submit-announcement'}
    >
      <Form/>
      <ActionButtons/>
    </DialogStack>
  )
}

function Form () {
  return (
    <>
      <TextField label='Título' size='small' variant='filled'/>
      <TextField label='Descripción' size='small' variant='filled' rows={2} multiline/>
      <TextField label='Link' size='small' variant='filled'/>
      <SimpleSelect label='Aspecto de Anuncio' name='aspect'/>
      <ImageLoader title='Cargar Imagen de Anuncio'/>
    </>
  )
}

function ActionButtons () {
  const { cleanAndCloseSubmitAnnouncement } = useCleanAndClose();
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap2}>
      <BlueButton onClick={cleanAndCloseSubmitAnnouncement}>Cancelar</BlueButton>
      <BlueButton variant='contained'>Guardar</BlueButton>
    </Stack>
  )
}