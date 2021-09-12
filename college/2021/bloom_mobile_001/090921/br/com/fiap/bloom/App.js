import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './components/screens/login';
import { SignUp } from './components/screens/signUp';
import { Home } from './components/screens/home';
import { VeggieInfo } from './components/screens/veggieInfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='VeggieInfo'
          component={VeggieInfo}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App