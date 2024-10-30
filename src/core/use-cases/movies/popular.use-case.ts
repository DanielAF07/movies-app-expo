import { HttpAdapter } from "@/src/config/adapters/http/http.adapter";
import { NowPlayingResponse } from "@/src/infrastructure/interfaces/movie-db.responses";
import { Movie } from "../../models/movie.model";
import { MovieMapper } from "@/src/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number
  limit?: number
}

export const moviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<NowPlayingResponse>('/popular', {
      params: {
        page: options?.page ?? 1
      }
    })

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching movies - Popular')
  }
}