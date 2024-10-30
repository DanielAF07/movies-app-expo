import HomeScreen from '../presentation/screens/home/HomeScreen'
import { Stack } from 'expo-router'

const RootIndex = () => {
  return (
    <>
    <Stack.Screen options={{title: 'Home'}}/>
    <HomeScreen />
    </>
  )
}
export default RootIndex