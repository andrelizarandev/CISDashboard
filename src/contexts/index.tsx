// Modules
import { useContext } from 'react';

// Contexts
import { DialogContext } from './dialog-context'

export default function useGetGlobalContexts () {

  const dialogContext = useContext(DialogContext);

  return {
    dialogContext
  }

}
