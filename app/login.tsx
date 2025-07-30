import { EmbossedForm } from '@/components/EmbossedForm';
import { RedirectIfAuthenticated } from '@/components/RedirectIfAuthenticated';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { HttpMethod, sendRequest } from '../utils/sendRequest';
import * as SessionUtils from '../utils/sessionUtils';

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
            const res = await sendRequest(testPayload);
            if (res.ok) {
                const data = await res.json();
                setResponseData(JSON.stringify(data));
                console.log(data)
                SessionUtils.saveSession('session', data)
                router.push({pathname: '/home'})
            } else {
                const errMsg = await res.text();
                console.error(`Error ${res.status}: ${errMsg}`);
            }
        } catch (error) {
            console.error('Request failed:', error);
            setResponseData('Error occurred');
        }
    }
    return (
        <RedirectIfAuthenticated>
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
              <Text>New here? <Link href="/signup" style={[styles.text_link, {color: theme.colors.primary}]}>Sign Up</Link>!</Text>
            </EmbossedForm>
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
  text_link: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});