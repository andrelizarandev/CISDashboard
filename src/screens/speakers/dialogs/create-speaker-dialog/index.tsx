// Modules
import { Button, Stack, TextField } from '@mui/material';
import { useContext } from 'react';

// Components
import DialogStack from '../../../../components/_shared/dialog-stack';

// Contexts
import { DialogContext } from '../../../../contexts/dialog-context';

// Hooks
import useCleanAndClose from '../../functions/cleanAndClose';

// Style
import FlexStyle from '../../../../styles/flex';

export default function CreateSpeakerDialog () {
  const { whichDialogIsOpen } = useContext(DialogContext);
  return (
    <DialogStack 
      onSubmit={() => {}}
      size='sm'
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
    </>
  )
}

function ActionButtons () {
  const { cleanAndCloseSubmitSpeaker } = useCleanAndClose();
  return (
    <Stack sx={FlexStyle.RowJustifyEndAlignCenterColumnGap3}>
      <Button size='small' onClick={cleanAndCloseSubmitSpeaker}>Cancelar</Button>
      <Button variant='contained' size='small'>Guardar</Button>
    </Stack>
  )
}