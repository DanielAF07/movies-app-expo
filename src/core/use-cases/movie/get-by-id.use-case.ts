import { HttpAdapter } from "@/src/config/adapters/http/http.adapter";
import { FullMovie } from "../../models/movie.model";
import { MovieInfoResponse } from "@/src/infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "@/src/infrastructure/mappers/movie.mapper";

export const getByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    const movieInfo = await fetcher.get<MovieInfoResponse>(`/${movieId}`)
    return MovieMapper.fromMovieToEntity(movieInfo)
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching movies - Get Movie Details')
  }
}