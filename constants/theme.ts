// constants/theme.ts
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { Colors } from './Colors';

export const getTheme = (colorScheme: 'light' | 'dark') => {
  const baseTheme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;
  const colors = Colors[colorScheme];

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: colors.background,
      primary: colors.primary,
      surface: colors.surface,
      onPrimary: colors.onPrimary,
      onBackground: colors.text,
      onSurface: colors.text,
    },
  };
};
