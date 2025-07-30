import { ProtectedRoute } from '@/components/ProtectedRoute';
import { UserInfo } from '@/components/UserInfo';
import { Session } from '@/interfaces/auth';
import { User } from '@/interfaces/user';
import { sendRequest } from '@/utils/sendRequest';
import { getSession } from '@/utils/sessionUtils';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';


export default function HomeScreen() {
    const theme = useTheme();
    const router = useRouter();

    // const [session, setSession] = useState<Session | null>(null);
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);  // 👈 Track loading status

    useEffect(() => {
        (async () => {
            // const valid = await ValidateToken();
            // if (!valid) {
            //     router.replace('/login');
            //     return;
            // }
            const session = await getSession<Session>('session'); // Your logic here
            if (session) {
                // Set to state or navigate
                // setSession(session)                
                const res = await sendRequest({
                    method: 'GET',
                    baseUrl: 'http://localhost:8080',
                    path: `/users/${session.user.id}`
                });
                const data = await res.json();

                setUserData(data);
            }
            setLoading(false);
        })();
    }, []);
    // 

    if (loading) {
        return (
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <ActivityIndicator animating={true} size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <ProtectedRoute>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>

                {/* <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>Welcome back {userData?.Profile?.first_name} </Text> */}
                {userData && <UserInfo data={userData} />}
            </View>
        </ProtectedRoute>
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
