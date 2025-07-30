// components/RedirectIfAuthenticated.tsx
import { ValidateToken } from '@/utils/authUtils';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export function RedirectIfAuthenticated({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const theme = useTheme();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    (async () => {
      const isValid = await ValidateToken();
      if (isValid) {
        router.replace('/home'); // 👈 adjust route as needed
      } else {
        setChecking(false); // show login/signup
      }
    })();
  }, []);

  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return <>{children}</>;
}
