const FlexStyle = {

  RowJustifyBetweenAlignCenter: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  RowJustifyEndAlignCenterColumnGap2: {
    flexDirection:'row',
    columnGap:2,
    justifyContent:'end',
    alignItems:'center'
  },

  RowJustifyStartColumnGap3: {
    flexDirection:'row',
    columnGap:3,
    justifyContent:'start'
  },

  RowAlignCenterColumnGap1: {
    flexDirection:'row',
    columnGap:1,
    alignItems:'center'
  },
  
  RowAlignCenterColumnGap2: {
    flexDirection:'row',
    columnGap:2,
    alignItems:'center'
  },

  RowFlexWrapGap1: {
    flexDirection:'row',
    width:'100%',
    columnGap:1,
    alignItems:'center',
  },

  JustifyCenterAlignCenterRowGap1: {
    alignItems:'center',
    justifyContent:'center',
    rowGap:1
  },

  JustifyCenterAlignCenterRowGap2: {
    alignItems:'center',
    justifyContent:'center',
    rowGap:2
  },

  RowAlignCenterJustifyCenterColumnGap2: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    columnGap:2
  }
  
}

export default FlexStyle;