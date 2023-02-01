import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import GavetaNavegator from './navegator/GavetaNavegator'
//goodbye tomatoes ):

export default function App(){
  return(
    <NavigationContainer>
        <GavetaNavegator/>
    </NavigationContainer>
  )
}