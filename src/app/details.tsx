import { Stack } from 'expo-router'
import DetailsScreen from '../presentation/screens/details/DetailsScreen'

const DetailsRoute = () => {
  return (
    <>
    <Stack.Screen options={{title: 'Details'}}/>
    <DetailsScreen />
    </>
  )
}
export default DetailsRoute