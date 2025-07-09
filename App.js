import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'
import AdminHome from './src/screens/users/admin/AdminHome'



const App = () => {
  return (
      // <AdminHome/>
     <NavigationContainer>
      <AppNavigation/>
     </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})