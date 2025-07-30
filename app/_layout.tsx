import { Logout } from '@/utils/authUtils';
import { Stack, useRouter } from 'expo-router';
import * as React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Button, PaperProvider, Searchbar } from 'react-native-paper';
import { getTheme } from '../constants/theme';



export default function RootLayout() {
  const [searchQuery, setSearchQuery] = React.useState('');
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Searchbar
                  placeholder="Search"
                  style={styles.search}
                  onChangeText={setSearchQuery}
                  value={searchQuery}
                />
                <Button textColor={theme.colors.onPrimary} onPress={() => { handleLogout(); }} compact>
                  Logout
                </Button>
              </View>
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

const styles = StyleSheet.create({
  search: {
    padding: 0,
  },
});