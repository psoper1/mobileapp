import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {

  const num1 = 5;
  const num2 = 5;

  const handlePress = () => {
    Alert.alert("It's " + (num1 + num2))
  }

  return (
    <View style={styles.container}>
      <Text>Press button to find out what 5 + 5 is</Text>
      <Button
      title="Press Me"
      color={'#FFD433'}
      onPress={handlePress}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E5568',
    alignItems: 'center',
    justifyContent: 'center',
  },
});