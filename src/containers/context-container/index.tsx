// Modules
import UiContextContainer from '../../contexts/ui-context';
import DialogContextContainer from '../../contexts/dialog-context';
import ImageDialog from '../../components/_dialogs/image-dialog';

export default function MainContextContainer ({ children }:any) {
  return (
    <UiContextContainer>
      <DialogContextContainer>
        {children}
        <ImageDialog/>
      </DialogContextContainer>
    </UiContextContainer>
  )
}