import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UI1 from './screens/UI1';
// import UI2 from './screens/UI2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UI1" component={UI1} />
        {/* <Stack.Screen name="UI2" component={UI2} /> */}
      </Stack.Navigator>
    </NavigationContainer >
  )
}