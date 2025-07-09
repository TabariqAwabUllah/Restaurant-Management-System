import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/authScreens/Login'
import SignUp from '../screens/authScreens/SignUp'
import { SafeAreaFrameContext } from 'react-native-safe-area-context'
import AdminHome from '../screens/users/admin/AdminHome'
import OrderDetails from '../screens/OrderDetails'
const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name='AdminHome' component={AdminHome} options={{headerShown: false}}/>
        <Stack.Screen name='OrderDetails' component={OrderDetails} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})