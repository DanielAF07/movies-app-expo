import { FullMovie } from '@/src/core/models/movie.model';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, useWindowDimensions, Image, Pressable, Platform } from 'react-native'

interface Props {
  movie: FullMovie
}

const MovieHeader = ({movie}: Props) => {
  const { height: screenHeight } = useWindowDimensions()
  const router = useRouter()

  return (
    <>
      <View style={{...styles.imageContainer, height: screenHeight*0.7}}>
        <View style={styles.imageBorder}>
          <Image
            source={{uri: movie.poster}}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.originalTitle}</Text>
        {movie.originalTitle !== movie.title ? <Text style={styles.subTitle}>{movie.title}</Text> : null}
      </View>

      <View style={styles.backButton}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: Platform.OS === 'android' ? 35 : 60,
    left: 16,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default MovieHeader