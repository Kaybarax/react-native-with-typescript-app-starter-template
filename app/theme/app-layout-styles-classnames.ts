//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

//this one for aid during dev to see your content borders
export const AllViewsCN = {
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#152939',
};

//containers
//start flex containers
export const FlexRowContainerCN = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  padding: 3,
  width: '100%',
};

export const FlexFluidRowContainerCN = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 3,
  width: '100%',
};

export const FlexColumnContainerCN = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: 3,
  width: '100%',
};

export const FlexFluidColumnContainerCN = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  flexWrap: 'wrap',
  padding: 3,
  width: '100%',
};
// end flex containers

//start flex container children
export const FlexContainerChildrenGapCN = {
  flex: 1,
  margin: 2, // and that, will result in a 4 points dimensions gap
};

export const FlexContainerChildItemCN = {
  padding: 2,
  flexGrow: 1,
};

export const FlexContainerChildItemNoGrowCN = {
  padding: 2,
  flexGrow: 0,
};

export const FlexContainerChildItemFullWidthCN = {
  flexBasis: '100%',
  padding: 2,
};

export const FlexContainerChildItemThreeQuartersWidthCN = {
  flexBasis: '75%',
  padding: 2,
};

export const FlexContainerChildItemOneHalfWidthCN = {
  flexBasis: '50%',
  padding: 2,
};

export const FlexContainerChildItemOneQuarterWidthCN = {
  flexBasis: '25%',
  padding: 2,
};

export const FlexContainerChildItemOneThirdWidthCN = {
  flexBasis: '33.33%',
  padding: 2,
};

export const FlexContainerChildItemWidthCN = (width) => ({
  flexBasis: width,
  width: width,
  padding: 2,
});
// end flex container children

// start flex container content alignments
export const AlignCenterContentCN = {
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

export const AlignRightFlexContainerContentCN = {
  alignItems: 'flex-end',
  textAlign: 'right',
};

export const AlignLeftFlexContainerContentCN = {
  justifyContent: 'center',
  alignItems: 'flex-start',
};
// end flex container content alignments
