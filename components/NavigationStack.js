import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Charting from "./Charting";
import Day from "./Month";
import ListView from "./ListView";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>        
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          name="Charting"
          component={Charting}
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount} 
        />
        <Stack.Screen
          name="ListView"
          component={ListView}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Day"
          component={Day}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
