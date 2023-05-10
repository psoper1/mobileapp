import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {

  const [theStyle, setTheStyle] = useState('#3E5568')
  const [pressed, setPressed] = useState(false)


  const handlePress = () => {
    setTheStyle((styles.container.backgroundColor === '#3E5568') ? '#393646' : '#3E5568');
    setPressed(!pressed)
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theStyle,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title={!pressed ? "Press Me to change me back" : "Press Me to change the background"}
        color={'#FFD433'}
        onPress={handlePress}
      />
    </View>
  );
}