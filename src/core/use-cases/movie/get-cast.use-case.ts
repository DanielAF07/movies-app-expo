import { HttpAdapter } from "@/src/config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "@/src/infrastructure/interfaces/movie-db.responses";
import { Cast } from "../../models/cast.model";
import { CastMapper } from "@/src/infrastructure/mappers/cast.mapper";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`)
    return cast.map(CastMapper.fromMovieDBToEntity)
  } catch (error) {
    console.error(error)
    throw new Error('Error - Get Movie Cast')
  }
}