/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import { NativeBaseProvider} from 'native-base';
import { I18nManager } from 'react-native';
import AddNoteScreen from './app/screens/AddNoteScreen';
import { NoteProvider } from './app/context/NoteContext';
import { enableScreens } from 'react-native-screens';
import UpdateNoteScreen from './app/screens/UpdateNoteScreen';
import RNBootSplash from 'react-native-bootsplash'
enableScreens(true);
const Stack = createStackNavigator();

I18nManager.forceRTL(true);

const App = () => {
useEffect(() => {
 const hideSplash=async()=>{
 await RNBootSplash.hide({fade:true})
 }
 hideSplash()
}, [])


  return (
    <NoteProvider>
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddNote" component={AddNoteScreen} />
          <Stack.Screen name="UpdateNote" component={UpdateNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </NoteProvider>
  );
};

export default App;
