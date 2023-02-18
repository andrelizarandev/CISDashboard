// Colors
import { primaryColor, secondaryColor } from "../../utils/colors";

// Style
import FlexStyle from "../../styles/flex";

const HomeStyle = {

  MenuOptionContainer: {
    backgroundColor:secondaryColor,
    borderRadius:1,
    cursor:'pointer'
  },

  MenuOptionPaddingContainer: {
    padding:2,
    color:primaryColor,
    ...FlexStyle.JustifyCenterAlignCenterRowGap1
  }

}

export default HomeStyle;