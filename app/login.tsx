import { EmbossedForm } from '@/components/EmbossedForm';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { HttpMethod, sendRequest } from '../utils/sendRequest';

const testPayload: {
  method: HttpMethod;
  baseUrl: string;
  path: string;
  payload: Record<string, any>;
} = {
  method: 'POST',
  baseUrl: 'http://localhost:8080',
  path: '/login',
  payload: {}
};

export default function LoginScreen() {
    const theme = useTheme();
    const router = useRouter();
    const [responseData, setResponseData] = useState<string | null>(null);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleButtonPress = async () => {
        testPayload.payload = {
            email: email,
            password: password
        }
        console.log(testPayload.payload)
        try {
            const data = await sendRequest(testPayload);
            console.log('Response:', data);
            setResponseData(JSON.stringify(data.user));
        } catch (error) {
            console.error('Request failed:', error);
            setResponseData('Error occurred');
        }
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <EmbossedForm label="Login">
                <TextInput
                    label="Email"
                    mode="outlined"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    mode="outlined"
                    onChangeText={text => setPassword(text)}
                />
                <Button
                    mode="contained"
                    onPress={handleButtonPress}
                >
                    Login
                </Button>
                {responseData && (
                    <Text>
                    Response: {responseData}
                    </Text>
                )}
            </EmbossedForm>
        </View>
        // <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        //     <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>Login</Text>
        //     <TextInput
        //         label="Email"
        //         mode="outlined"
        //         onChangeText={text => setEmail(text)}
        //     />
        //     <TextInput
        //         label="Password"
        //         secureTextEntry
        //         mode="outlined"
        //         onChangeText={text => setPassword(text)}
        //     />
        //     <Button
        //         mode="contained"
        //         onPress={handleButtonPress}
        //     >
        //         Login
        //     </Button>
        //     {responseData && (
        //         <Text>
        //         Response: {responseData}
        //         </Text>
        //     )}
        // </View>
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