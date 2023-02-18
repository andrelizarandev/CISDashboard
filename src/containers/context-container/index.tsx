// Modules
import UiContextContainer from '../../contexts/ui-context';
import DialogContextContainer from '../../contexts/dialog-context';

export default function MainContextContainer ({ children }:any) {
  return (
    <UiContextContainer>
      <DialogContextContainer>
        {children}
      </DialogContextContainer>
    </UiContextContainer>
  )
}