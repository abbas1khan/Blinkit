import { Dimensions, PixelRatio } from 'react-native';

// Get the screen dimensions
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

// Use standard screen dimensions as base (e.g. My Design Screen Size is 360 X 804 (iPhone 13 Pro Max))
const BASE_WIDTH = 360;
const BASE_HEIGHT = 804;

// Horizontal scale function
export const horizontalScale = (size) => {
    return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

// Vertical scale function
export const verticalScale = (size) => {
    return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

// Font scale function
export const scaleFont = (size) => {
    const scaleRatio = SCREEN_WIDTH / BASE_WIDTH;
    const newSize = size * scaleRatio;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Moderate scale function
export const moderateScale = (size, factor = 0.5) => {
    return size + (verticalScale(size) - size) * factor;
};