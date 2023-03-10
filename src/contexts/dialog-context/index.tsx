// Modules
import { createContext, useState } from 'react';

// Types
import { DialogContextPayload, DialogOptions } from './types';

export const DialogContext = createContext({} as DialogContextPayload);

export default function DialogContextContainer ({ children }:any) {

  const [ imageToView, setImageToView ] = useState<null | string>(null);
  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);
  const closeAnyDialog = () => setWhichDialogIsOpen(null);

  const payload:DialogContextPayload = {
    imageToView, 
    setImageToView,
    closeAnyDialog,
    whichDialogIsOpen,
    setWhichDialogIsOpen,
  }

  return (
    <DialogContext.Provider value={payload}>
      {children}
    </DialogContext.Provider>
  )
}