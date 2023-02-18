// Colors
import { greyA, greyB, greyD } from "../../../utils/colors";

const ImageLoaderStyle = {

  MainContainer: {
    borderRadius:1,
    border:`2px dashed ${greyB}`,
    backgroundColor:greyD,
    color:greyA,
    cursor:'pointer'
  },

  MainPaddingContainer: {
    padding:2,
    alignItems:'center',
    rowGap:.5
  }

}

export default ImageLoaderStyle;