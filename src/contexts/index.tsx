// Modules
import UiContextContainer from './ui-context';
import DialogContextContainer from './dialog-context';

export default function MainContext ({ children }:any) {
  return (
    <UiContextContainer>
      <DialogContextContainer>
        {children}
      </DialogContextContainer>
    </UiContextContainer>
  )
}