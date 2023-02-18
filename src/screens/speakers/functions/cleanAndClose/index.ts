// Modules
import { useContext } from 'react';

// Contexts
import { DialogContext } from '../../../../contexts/dialog-context'

export default function useCleanAndClose () {

  const { closeAnyDialog } = useContext(DialogContext);
  
  function cleanAndCloseSubmitSpeaker () {
    closeAnyDialog();
  }

  return {
    cleanAndCloseSubmitSpeaker
  }

}
