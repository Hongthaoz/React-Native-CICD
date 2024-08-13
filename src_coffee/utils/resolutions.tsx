import { Platform, StatusBar, Dimensions, ViewStyle } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { isTablet } from 'react-native-device-info';

const { height, width } = Dimensions.get('window');
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : (StatusBar.currentHeight || 0);

const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

export function RFPercentage(percent: number): number {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize: number, standardScreenHeight = 720): number {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

// padding, margin, fontSize, ....
export const scale = (size: number): number => (width / guidelineBaseWidth) * size;

// width
export const wScale = (size: number): number => (height / guidelineBaseHeight) * size;

// height
export const hScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

/**
 * @param {Object} styles - StyleProps
 * @param {ViewStyle} styles.tablet - Style for tablet or ipad
 * @param {ViewStyle} styles.phone - Style for phone
 */
export const StylePlatform = (styles: { tablet: ViewStyle; phone: ViewStyle }): ViewStyle => {
  if (isTablet() || (Platform.OS === 'ios' && isIphoneX())) {
    return styles.tablet || {};
  }
  return styles.phone || {};
};
