import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const StackNavigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  )
}
export default StackNavigator