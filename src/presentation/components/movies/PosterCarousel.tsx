import { Movie } from '@/src/core/models/movie.model'
import { View, Text, ScrollView } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
  movies: Movie[]
  height?: number
}

const PosterCarousel = ({height = 440, movies}: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {movies.map(movie => <MoviePoster key={movie.id} movie={movie}/>)}
      </ScrollView>
    </View>
  )
}
export default PosterCarousel