import { RedirectIfAuthenticated } from '@/components/RedirectIfAuthenticated';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';



export const options = {
    title: "Service Hub"
}

export default function HomeScreen() {
    const theme = useTheme();
    const router = useRouter();

    return (
        <RedirectIfAuthenticated>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>Welcome to Service Hub</Text>
                <Button
                    mode="contained"
                    onPress={() => router.navigate('./login')}  // navigate to /profile
                >
                    Login
                </Button>
            </View>
        </RedirectIfAuthenticated>
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
