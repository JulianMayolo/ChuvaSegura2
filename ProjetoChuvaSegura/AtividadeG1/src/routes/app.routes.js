import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import CreateOcors from '../pages/CreateOcors';
import CreateUser from '../pages/CreateUser';
import DetailsOcors from '../pages/DetailsOcors';
import EditUser from '../pages/EditUser';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="CreateOcors"
                component={CreateOcors}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="CreateUser"
                component={CreateUser}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="DetailsOcors"
                component={DetailsOcors}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="EditUser"
                component={EditUser}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;