// Modules
import { createContext, useState } from 'react';

// Types
import { 
  MessageDialogPayload,
  SnackbarPayload, 
  UiContextPayload 
} from './types';

export const UiContext = createContext({} as UiContextPayload);

export default function UiContextContainer ({ children }:any) {

  const [ messageDialog, setMessageDialog ] = useState<MessageDialogPayload>(null);
  const [ snackbarMessage, setSnackbarMessage ] = useState<SnackbarPayload>(null);
  const [ functionHelper, setFunctionHelper ] = useState<any>(null);
  const [ isEditing, setIsEditing ] = useState(false);

  const handleSetNullSnackbarMessage = () => setSnackbarMessage(null);

  const payload = {
    messageDialog, 
    setMessageDialog,
    snackbarMessage,
    setSnackbarMessage,
    handleSetNullSnackbarMessage,
    functionHelper, 
    setFunctionHelper,
    isEditing, 
    setIsEditing
  }

  return (
    <UiContext.Provider value={payload}>
      {children}
    </UiContext.Provider>
  )
}
