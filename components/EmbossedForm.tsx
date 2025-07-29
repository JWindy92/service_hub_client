import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';



type FormProps = {
  label?: string;
  children: React.ReactNode;
};

export function EmbossedForm({ label, children }: FormProps) {
  const theme = useTheme();

  return (
    <Surface style={styles.surface}>
      {label && (
        <Text
          variant="headlineMedium"
          style={{ color: theme.colors.onBackground, marginBottom: 12 }}
        >
          {label}
        </Text>
      )}
      {children}
    </Surface>
  );
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