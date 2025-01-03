import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const sizes = {
    // Window dimensions
    width,
    height,

    // Screen dimensions
    screenWidth,
    screenHeight,
}

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'

export const fontFamily = {
    regular: 'Okra-Regular',
    medium: 'Okra-Medium',
    light: 'Okra-MediumLight',
    semiBold: 'Okra-Bold',
    bold: 'Okra-ExtraBold',
}

export const colors = {
    primary: '#f7ca49',
    primary_light: '#ffe141',
    secondary: '#0d8320',
    secondary2: '#2c7613',
    text: '#363636',
    disabled: '#9197a6',
    border: "#d0d4dc",
    backgroundSecondary: '#f5f6fb',

    text2: "#757c8e",
    text3: "#2a3142",

    background1: '#e9f7f8',
    background2: "#f8f9fc",
    background3: "#E8EAF5",
    background4: "#f3f4f7",
    background5: "#f8f8f8",
    background6: "#E5F3F3",
    background7: "#363636",
    background8: "#CFFFDB",
    background9: "#edf3ff",
    background10: "#faf6eb",

    border2: "#eee",

    placeHolder: "#ccc",

    noticeBackground: "#CCD5E4",
    darkBlue: "#2D3875",
    darkBlue2: "#3B4886",
    darkBlue3: "#266eeb",
    darkBlue4: "#246ded",

    lightBlue1: "#f7faff",
    lightBlue2: "#dce8ff",
    lightBlue3: "#e9f9f9",

    dargGrey1: "#41495b",

    lightGrey1: "#9096a6",

    white: "#ffffff",
    black: "#000000",

    rgbaWhite: opacity => `rgba(255,255,255,${opacity})`,
    rgbaBlack: opacity => `rgba(0,0,0,${opacity})`,

    rgba: (number = 0, opacity = 1) => `rgba(${number},${number},${number},${opacity})`,

    transparent: "transparent",

    lightColor1: 'rgba(255,255,255,1)',
    lightColor2: 'rgba(255,255,255,0.9)',
    lightColor3: 'rgba(255,255,255,0.7)',
    lightColor4: 'rgba(255,255,255,0.6)',
    lightColor5: 'rgba(255,255,255,0.5)',
    lightColor6: 'rgba(255,255,255,0.4)',
    lightColor7: 'rgba(255,255,255,0.003)',

    darkColor1: 'rgba(54, 67, 92, 1)',
    darkColor2: 'rgba(54, 67, 92, 0.9)',
    darkColor3: 'rgba(54, 67, 92, 0.8)',
    darkColor4: 'rgba(54, 67, 92, 0.2)',
    darkColor5: 'rgba(54, 67, 92, 0.0)',
}

export const lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.7)',
    'rgba(255,255,255,0.6)',
    'rgba(255,255,255,0.5)',
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.003)',
]

export const darkWeatherColors = [
    'rgba(54, 67, 92, 1)',
    'rgba(54, 67, 92, 0.9)',
    'rgba(54, 67, 92, 0.8)',
    'rgba(54, 67, 92, 0.2)',
    'rgba(54, 67, 92, 0.0)',
]

export function hexToRgbA(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${opacity})`;
    }
}