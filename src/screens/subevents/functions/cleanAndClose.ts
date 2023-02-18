// Hooks
import useGlobalContexts from '../../../contexts';

export default function useCleanAndClose () {

  const { dialogContext } = useGlobalContexts();
  const { closeAnyDialog } = dialogContext;
  
  function cleanAndCloseSubmitSubevent () {
    closeAnyDialog();
  }

  return {
    cleanAndCloseSubmitSubevent
  }

}
