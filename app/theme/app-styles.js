//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {StyleSheet} from 'react-native';
import {
  AlignCenterContentCN,
  AlignLeftFlexContainerContentCN,
  AlignRightFlexContainerContentCN,
  AllViewsCN, FlexColumnContainerCN,
  FlexContainerChildItemCN,
  FlexContainerChildItemFullWidthCN,
  FlexContainerChildItemNoGrowCN,
  FlexContainerChildItemOneHalfWidthCN,
  FlexContainerChildItemOneQuarterWidthCN,
  FlexContainerChildItemOneThirdWidthCN,
  FlexContainerChildItemThreeQuartersWidthCN,
  FlexContainerChildItemWidthCN, FlexContainerChildrenGapCN,
  FlexFluidColumnContainerCN, FlexFluidRowContainerCN,
  FlexRowContainerCN,
} from './app-style-classnames';

const AppStyles = StyleSheet.create({

  //this one for aid during dev to see your content borders
  AllViewsCN,

  //containers
  //start flex containers
  FlexRowContainerCN,
  FlexFluidRowContainerCN,
  FlexColumnContainerCN,
  FlexFluidColumnContainerCN,
  // end flex containers

  //start flex container children
  FlexContainerChildrenGapCN,
  FlexContainerChildItemCN,
  FlexContainerChildItemNoGrowCN,
  FlexContainerChildItemFullWidthCN,
  FlexContainerChildItemThreeQuartersWidthCN,
  FlexContainerChildItemOneHalfWidthCN,
  FlexContainerChildItemOneQuarterWidthCN,
  FlexContainerChildItemOneThirdWidthCN,
  FlexContainerChildItemWidthCN,
  // end flex container children

  // start flex container content alignments
  AlignCenterContentCN,
  AlignRightFlexContainerContentCN,
  AlignLeftFlexContainerContentCN,
  // end flex container content alignments

});

export default AppStyles;
