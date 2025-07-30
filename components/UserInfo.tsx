import { User } from '@/interfaces/user';
import React from 'react';
import { View } from 'react-native';
import { Avatar, Text, useTheme } from 'react-native-paper';


type props = {
  data?: User;
};

export function UserInfo({ data }: props) {
    const theme = useTheme();

    return (
        <View>
            <Avatar.Text size={36} label="JB" />
            <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>{data?.Profile.first_name} {data?.Profile.last_name}  </Text>
        </View>
    );
}