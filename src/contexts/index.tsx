// Modules
import { useContext } from 'react';

// Contexts
import { DialogContext } from './dialog-context'

export default function useGlobalContexts () {

  const dialogContext = useContext(DialogContext);

  return {
    dialogContext
  }

}
