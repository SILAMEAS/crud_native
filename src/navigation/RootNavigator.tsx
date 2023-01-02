import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen, ForgotPasswordScreen} from '@screens/index';
import View_PDF from '@src/screens/Pdf/View_PDF';
// import {Counter} from '@src/redux/counter/Counter';
import CRUD from '@src/screens/CRUD/CRUD';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="View_CRUD"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View_PDF" component={View_PDF} />
      <Stack.Screen name="View_CRUD" component={CRUD} />
    </Stack.Navigator>
  );
}
