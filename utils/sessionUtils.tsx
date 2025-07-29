import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export async function saveSession(key: string, value: any) {
  const jsonValue = JSON.stringify(value);
  if (Platform.OS === 'web') {
    await AsyncStorage.setItem(key, jsonValue);
  } else {
    await SecureStore.setItemAsync(key, jsonValue);
  }
}

export async function getSession<T = any>(key: string): Promise<T | null> {
  let result: string | null = null;
  if (Platform.OS === 'web') {
    result = await AsyncStorage.getItem(key);
  } else {
    result = await SecureStore.getItemAsync(key);
  }
  return result ? JSON.parse(result) as T : null;
}

export async function clearSession(key: string) {
  if (Platform.OS === 'web') {
    await AsyncStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
}
