// Hooks
import useGetGlobalContexts from '../../../contexts';

export default function useCleanAndClose () {

  const { dialogContext } = useGetGlobalContexts();
  const { closeAnyDialog } = dialogContext;
  
  function cleanAndCloseSubmitEvent () {
    closeAnyDialog();
  }

  return {
    cleanAndCloseSubmitEvent
  }

}
