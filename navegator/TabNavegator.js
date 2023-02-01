import React from 'react';
import { createButtonTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createButtonTabNavigator();


const ButtonTabNavigator =()=>{
    return(
        <Tab.Navigator
        screenOptions = {({route})=>({
            tabBarIcon: ({focused, color, size})=>{
                var iconNaem;
                if (route.name === 'Feed'){
                    iconNaem = focused
                    ? 'book'
                    : 'book-outline'
                }
                else if (route.name === 'CreateStory') {
                    iconNaem = focused
                    ? 'create'
                    : 'create-outline'
                }
                return <Ionicons name = {iconNaem} size = {size} color = {color}/>
            }
        })}
        tabBarOptions = {{
            activeTintColor: 'yellow',
            inativeTintColor: 'gray'
        }}>

            <Tab.Screen name = 'Feed' component = {Feed}/>
            <Tab.Screen name = 'CreateStory' component = {CreateStory}/>
        </Tab.Navigator>
    )
};
export default ButtonTabNavigator;