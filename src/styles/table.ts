// Colors
import { blue500 } from "../utils/colors";

const TableStyle = {

  SelectedRow (isSelected:boolean) {
    return {
      backgroundColor: isSelected ? blue500 : '',
      cursor:'pointer'
    }
  },

  TableWidth (width:number) {
    return {
      width:`${width}%`
    }
  }

}

export default TableStyle;