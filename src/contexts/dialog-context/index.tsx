// Modules
import { createContext, useState } from 'react';

// Types
import { DialogContextPayload, DialogOptions } from './types';

export const DialogContext = createContext({} as DialogContextPayload);

export default function DialogContextContainer ({ children }:any) {

  const [ whichDialogIsOpen, setWhichDialogIsOpen ] = useState<DialogOptions>(null);
  const closeAnyDialog = () => setWhichDialogIsOpen(null);

  const payload:DialogContextPayload = {
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