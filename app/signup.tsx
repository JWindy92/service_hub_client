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
  path: '/signup',
  payload: {}
};


export default function LoginScreen() {
    const theme = useTheme();
    const router = useRouter();
    const [responseData, setResponseData] = useState<string | null>(null);
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = React.useState("");
    const [passwordConf, setPasswordConf] = React.useState("");

    const validateEmail = (text: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (text.length === 0) {
            setEmailError('Email address cannot be empty');
        } else if (reg.test(text) === false) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
        setEmail(text);
    };

    const handleButtonPress = async () => {
        if (validatePassword(password, passwordConf)) {
            testPayload.payload = {
                email: email,
                password: password
            }
        } else {
            console.error("Passwords do not match")
            return
        }
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
            <EmbossedForm label="Sign Up">
                <TextInput
                    label="Email"
                    mode="outlined"
                    onChangeText={text => validateEmail(text)}
                    error={!!emailError} // Show error state for TextInput
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    mode="outlined"
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    label="PasswordConf"
                    secureTextEntry
                    mode="outlined"
                    onChangeText={text => setPasswordConf(text)}
                    error={password !== passwordConf && passwordConf.length > 0}
                />
                <Button
                    mode="contained"
                    onPress={handleButtonPress}
                >
                    Sign Up
                </Button>
                {responseData && (
                    <Text>
                    Response: {responseData}
                    </Text>
                )}
            </EmbossedForm>
        </View>
    );
}

function validatePassword(password: string, passwordConf: string): boolean {
    if (password !== passwordConf) {
        return false;
    }
    return true;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  surface: {
    padding: 8,
    height: 400,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  }
});