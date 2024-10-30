import { FullMovie } from '@/src/core/models/movie.model'
import { View, Text, FlatList } from 'react-native'
import {Formatter} from '@/src/config/helpers/formatter'
import { FC, PropsWithChildren } from 'react'
import { Cast } from '@/src/core/models/cast.model'
import CastActor from '../cast/CastActor'
interface Props {
  movie: FullMovie,
  cast: Cast[]
}

const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text>{movie.rating} </Text>
        <Text>
          - {movie.genres.join(', ')}
        </Text>
      </View>
      <Title>
        Overview
      </Title>
      <Text style={{fontSize: 16}}>{movie.description}</Text>
      <Title>
        Budget
      </Title>
      <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
    </View>
    <View style={{marginTop: 10, marginBottom: 50}}>
      <Text style={{fontSize: 23, marginVertical: 10, fontWeight: 'bold', marginHorizontal: 20}}>
          Cast
      </Text>
      <FlatList
        data={cast}
        style={{paddingLeft: 10}}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CastActor actor={item} />}
      />
    </View>
    </>
  )
}

const Title = (props: PropsWithChildren) => {
  return (
    <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
      {props.children}
    </Text>
  )
}
export default MovieDetails