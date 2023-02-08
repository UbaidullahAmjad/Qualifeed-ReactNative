import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { StatusBar } from 'react-native';
import Login from '../Auth/Login';
import Home from '../HomeScreen/Home';
import ProjectDetails from '../HomeScreen/Project/ProjectDetails';
import PerPieceDetail from '../HomeScreen/Project/PerPieceDetail';
import Profile from '../Profile/Profile';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor={'#000'} />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
                    <Stack.Screen name="PerPieceDetail" component={PerPieceDetail} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default Navigation;
