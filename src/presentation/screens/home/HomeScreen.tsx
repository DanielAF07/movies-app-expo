import { View, Text, ScrollView } from 'react-native'
import useMovies from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PosterCarousel from '../../components/movies/PosterCarousel'
import HorizontalCarousel from '../../components/movies/HorizontalCarousel'
import FullScreenLoader from '../../components/loaders/FullScreenLoader'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const {
    isLoading, nowPlaying, popular, topRated, upcoming,
    popularNextPage, topRatedNextPage, upcomingNextPage
  } = useMovies()

  if(isLoading) {
    return(<FullScreenLoader />)
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying}/>
        
        <HorizontalCarousel
          movies={popular}
          title="Popular"
          onEndReached={popularNextPage}
        />
        <HorizontalCarousel
          movies={topRated}
          title="Top Rated"
          onEndReached={topRatedNextPage}
        />
        <HorizontalCarousel
          movies={upcoming}
          title="Upcoming"
          onEndReached={upcomingNextPage}
        />
      </View>
    </ScrollView>
  )
}
export default HomeScreen