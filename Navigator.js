import React from 'react';
import loginPane from './components/Login';
import Main from './components/Main';
import Registration from './components/registration';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
                name="Main"
                component={Main}
            />
            <Stack.Screen 
                name="Login"
                component={loginPane}
                options={{title: 'Login'}}
            />
              <Stack.Screen 
                name="Registratin"
                component={Registration}
                options={{title: 'Registracija'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}