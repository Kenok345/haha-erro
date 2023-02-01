import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavegator from './TabNavegator';
import Profile from '../screens/Profile';

const Gaveta = createDrawerNavigator();
const GavetaNavegator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Tela Inicial' component = 'TabNavegator'/>
            <Drawer.Screen name = 'Perfil' component = 'Profile'/>
        </Drawer.Navigator>
    )
}

export default GavetaNavegator;