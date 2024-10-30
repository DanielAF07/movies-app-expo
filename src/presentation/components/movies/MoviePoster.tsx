import { Movie } from '@/src/core/models/movie.model'
import { useRouter } from 'expo-router'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

interface Props {
  movie: Movie
  height?: number
  width?: number
}
const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const router = useRouter()
  
  return (
    <Pressable
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 7,
        opacity: pressed ? 0.9 : 1
      })}
      onPress={() => router.navigate({
        pathname: '/details',
        params: { movieId: movie.id }
      })}
    >
      <View
        style={{
          ...styles.imageContainer
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: movie.poster }}
          />
      </View>
    </Pressable>
  )
}
export default MoviePoster

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 16
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9
  }
})