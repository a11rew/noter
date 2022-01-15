/**
 * Returns responsive sizing values based on pixel density
 */

import {Dimensions, PixelRatio} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 414;
const hscale: number = SCREEN_HEIGHT / 896;

const normalize = (
  size: number,
  based: 'width' | 'height' = 'width',
): number => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default normalize;
