import { View, ActivityIndicator } from 'react-native'
const FullScreenLoader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator size='large' color='indigo'/>
    </View>
  )
}
export default FullScreenLoader