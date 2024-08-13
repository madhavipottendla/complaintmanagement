import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'

import Complaint from './Complaint'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <GestureHandlerRootView style={{ flex: 0 }}>
      <StatusBar />
      <Header />
      <View style={{ flex: 0 }}>
       
        <Complaint />
      </View>
    </GestureHandlerRootView>
  )
}