import { useLocalSearchParams } from 'expo-router'
import { ScrollView } from 'react-native'
import useMovie from '../../hooks/useMovie'
import MovieHeader from '../../components/movie/MovieHeader'
import MovieDetails from '../../components/movie/MovieDetails'
import FullScreenLoader from '../../components/loaders/FullScreenLoader'

const DetailsScreen = () => {
  const { movieId } = useLocalSearchParams()
  const { isLoading, movie, cast } = useMovie(Number(movieId))

  if(isLoading && !movie) {
    return(<FullScreenLoader />)
  }
  return (
    <ScrollView>
      <MovieHeader movie={movie!} />
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}
export default DetailsScreen