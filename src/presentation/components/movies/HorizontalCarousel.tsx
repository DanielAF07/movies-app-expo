import { Movie } from '@/src/core/models/movie.model'
import { View, Text, FlatList } from 'react-native'
import MoviePoster from './MoviePoster'
import { useRef } from 'react'

interface Props {
  movies: Movie[]
  title?: string
  onEndReached?: () => void
}

const HorizontalCarousel = ({movies, title, onEndReached}: Props) => {
  const isLoading = useRef<boolean>(false)

  const handleEndReached = async () => {
    if(onEndReached && !isLoading.current){
      isLoading.current = true
      await onEndReached()
      isLoading.current = false
    }
  }
  return (
    <View
      style={{height: title ? 260 : 220}}
    >
      {
        title && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: '300',
              marginLeft: 10,
              marginBottom: 10
            }}
          >{title}</Text>
        )
      }

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200}/>
        )}
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={handleEndReached}
        onEndReachedThreshold={1}
      />

    </View>
  )
}
export default HorizontalCarousel