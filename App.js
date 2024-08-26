import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MainAppNavigation from './src/navigation/MainAppNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { colors } from './src/utils/Theme'
import { changeNavigationColor } from './src/utils/Helper'

const App = () => {

  useEffect(() => {
    changeNavigationColor(colors.primary)
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <StatusBar translucent backgroundColor={colors.transparent} barStyle={"dark-content"} />
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <MainAppNavigation />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})