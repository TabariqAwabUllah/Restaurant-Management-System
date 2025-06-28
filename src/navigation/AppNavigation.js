import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/authScreens/Login'
import SignUp from '../screens/authScreens/SignUp'
const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})