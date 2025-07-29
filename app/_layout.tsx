import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { getTheme } from '../constants/theme';


export default function RootLayout() {
  const colorScheme = useColorScheme() ?? 'light'; // fallback for SSR/dev mode
  const theme = getTheme("light");

  return (
    <PaperProvider theme={theme}>
      <Stack
          screenOptions={{ 
            title: 'Service Hub',
            headerStyle: { backgroundColor: theme.colors.primary},
            headerTintColor: theme.colors.onPrimary
          }}>
        <Stack.Screen
          name="index"
        />
      </Stack>
    </PaperProvider>
  );
}