import { User } from '@/interfaces/user';
import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Avatar, Card, Divider, Text, useTheme } from 'react-native-paper';

type UserInfoProps = {
  data: User;
};

export function UserInfo({ data }: UserInfoProps) {
  const theme = useTheme();
  const { first_name, last_name, phone, Address } = data.Profile;
  const { width } = useWindowDimensions(); // get screen width

  const initials = `${first_name[0]}${last_name[0]}`.toUpperCase();

  return (
    <View style={[styles.container, { width }]}>
      <Card style={styles.card} mode="elevated">
        <Card.Title
          title={`${first_name} ${last_name}`}
          left={() => <Avatar.Text size={48} label={initials} />}
          titleStyle={{ color: theme.colors.onSurface, fontWeight: 'bold' }}
        />
        <Divider />
        <Card.Content>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{data.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{Address}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0, // adjust based on your header height if needed
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 0,
    elevation: 4,
  },
  infoRow: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  label: {
    fontWeight: '600',
    width: 80,
    color: '#555',
  },
  value: {
    flex: 1,
    color: '#333',
  },
});
