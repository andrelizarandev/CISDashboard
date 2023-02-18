export type DialogContextPayload = {
  whichDialogIsOpen: DialogOptions;
  closeAnyDialog: () => void;
  setWhichDialogIsOpen: React.Dispatch<React.SetStateAction<DialogOptions>>;
}

export type DialogOptions = 
  'submit-speaker' | 
  'submit-event' | 
  'submit-subevent' | 
  'submit-announcement' | 
  null