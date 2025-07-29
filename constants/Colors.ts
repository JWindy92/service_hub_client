/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const customPalette = {
  gunmetal: '#2c363f',
  orange: '#faa613',
  darkSpringGreen: '#0c7c59',
  teaGreen: '#def4c6',
  snow: '#f4eded',
};

export const Colors = {
  light: {
    text: customPalette.gunmetal,
    background: customPalette.snow,
    onBackground: customPalette.gunmetal,
    tint: customPalette.orange,
    icon: customPalette.gunmetal,
    tabIconDefault: customPalette.gunmetal,
    tabIconSelected: customPalette.orange,
    surface: customPalette.teaGreen,
    onSurface: customPalette.gunmetal,
    primary: customPalette.darkSpringGreen,
    onPrimary: customPalette.snow,
    tertiary: customPalette.orange,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
    surface: '#2c363f',
    primary: '#faa613',
    onPrimary: '#f4eded',
  },
};

// export const Colors = {
//   light: {
//     text: '#11181C',
//     background: '#fff',
//     tint: tintColorLight,
//     icon: '#687076',
//     tabIconDefault: '#687076',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#ECEDEE',
//     background: '#151718',
//     tint: tintColorDark,
//     icon: '#9BA1A6',
//     tabIconDefault: '#9BA1A6',
//     tabIconSelected: tintColorDark,
//   },
// };
