import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import * as SessionUtils from '../utils/sessionUtils';

interface LoginResponse {
    token: string
    user: {
        id: number;
    };
}

export default function HomeScreen() {
    const theme = useTheme();
    const router = useRouter();

    const [session, setSession] = useState<LoginResponse | null>(null);

    useEffect(() => {
        (async () => {
            const session = await SessionUtils.getSession<LoginResponse>('session');
            if (session) {
                // Set to state or navigate
                console.log('Restored session:', session);
                setSession(session)
                // GET full user data
            }
        })();
    }, []);

    return (
        // <PaperProvider>
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>Hello! User {session?.user.id} </Text>
        </View>
        // </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
