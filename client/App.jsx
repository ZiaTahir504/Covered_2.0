import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

import MyTabs from './src/screens/MyTabs';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({Kanit_400Regular});

  if (!fontsLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="MyTabs"
          screenOptions={{
            headerTitle: "📖 support your local bookstore 📖",
            headerStyle: {
              backgroundColor: '#ED254E',
            },
            headerTitleStyle: {
              fontFamily: 'Kanit_400Regular',
              color: '#FFFFFF'
            }
          }}
        >
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
