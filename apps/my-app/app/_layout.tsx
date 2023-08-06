import React from 'react'
import { TrpcProvider } from '../trpc-utils/TrpcProvider'
import { SafeAreaView, View } from 'react-native'
import { Slot } from 'expo-router'
import { StyleSheet } from 'react-native'
import '../global.css'

export default function HomeLayout() {
  return (
    <TrpcProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Slot />
        </View>
      </SafeAreaView>
    </TrpcProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
