export type DialogContextPayload = {
  imageToView: string | null;
  setImageToView: React.Dispatch<React.SetStateAction<string | null>>;
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