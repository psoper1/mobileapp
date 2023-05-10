import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export default function App() {

  const [theStyle, setTheStyle] = useState('#3E5568')
  const [pressed, setPressed] = useState(false)

  function Home() {
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

  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen 
                  name="Home" 
                  component={Home}
                  options={{
                    headerShown: true,
                    headerTitleAlign: 'center'
                  }}
                  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}