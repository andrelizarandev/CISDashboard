// Types
import { OnChangeEvent } from "../use-handle-form/types";

export default function useHandleImages (onSuccess: (data:any) => void) {
  
  function fileToBase64 (e:OnChangeEvent, ) {
    let file = e.target.files!![0]
    let reader = new FileReader();
    reader.onloadend = () => onSuccess(reader.result);
    reader.readAsDataURL(file);
  }

  return {
    fileToBase64
  }

}
