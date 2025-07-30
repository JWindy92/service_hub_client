import { Logout } from '@/utils/authUtils';
import { Stack, useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import { getTheme } from '../constants/theme';



export default function RootLayout() {
  const colorScheme = useColorScheme() ?? 'light'; // fallback for SSR/dev mode
  const theme = getTheme("light");
  const router = useRouter();

  const handleLogout = async () => {
    await Logout(router);
  };

  return (
    <PaperProvider theme={theme}>
      <Stack
          screenOptions={{ 
            title: 'Service Hub',
            headerStyle: { backgroundColor: theme.colors.primary},
            headerTintColor: theme.colors.onPrimary,
            headerRight: () => (
              <Button textColor={theme.colors.onPrimary} onPress={() => { handleLogout(); }} compact>
                Logout
              </Button>
            ),
          }}>
        <Stack.Screen
          name="index"
        />
        {/* <Stack.Screen
          name="home"
        /> */}
      </Stack>
    </PaperProvider>
  );
}