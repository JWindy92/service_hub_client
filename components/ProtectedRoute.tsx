// components/ProtectedRoute.tsx
import { ValidateToken } from '@/utils/authUtils';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const theme = useTheme();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    (async () => {
      const isValid = await ValidateToken();
      if (!isValid) {
        router.replace('/login');
      } else {
        setIsChecking(false);
      }
    })();
  }, []);

  if (isChecking) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return <>{children}</>;
}
