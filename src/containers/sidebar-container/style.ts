// Colors
import { greyD, greyE, primaryColor } from "../../utils/colors";

// Styles
import FlexStyle from "../../styles/flex";

const SidebarContainerStyle = {

  MainContainer: {
    height:'100vh'
  },

  TopBarContainer: {
    backgroundColor:primaryColor,
    width:'100%',
    position:'fixed',
    height:'7vh',
    top:0,
    justifyContent:'center'
  },

  TopBarPaddingContainer: {
    height:'100%',
    padding:2,
    color:'white',
    ...FlexStyle.RowJustifyBetweenAlignCenter,
  },

  SidebarMenuContainer: {
    position:'fixed',
    width:'300px',
    height:'93vh',
    bottom:0,
    backgroundColor:greyD
  },

  SidebarMenuPaddingContainer: {
    padding:2,
    rowGap:2
  },

  PageContentContainer: {
    height:'100vh',
    backgroundColor:greyE
  },

  PageContentPaddingContainer: {
    padding:2,
    paddingLeft:40,
    paddingTop:9,
    rowGap:2
  },

  MenuOptionContainer (isSelected:boolean) {
    return {
      border:`2px solid ${primaryColor}`,
      borderRadius:1,
      cursor:'pointer',
      backgroundColor: isSelected ? primaryColor : '',
      color: isSelected ? 'white' : primaryColor,
    }
  },

  MenuOptionPaddingContainer: {
    padding:2,
    ...FlexStyle.RowJustifyBetweenAlignCenter
  }

}

export default SidebarContainerStyle;