import { HttpAdapter } from "@/src/config/adapters/http/http.adapter";
import { NowPlayingResponse } from "@/src/infrastructure/interfaces/movie-db.responses";
import { Movie } from "../../models/movie.model";
import { MovieMapper } from "@/src/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number
  limit?: number
}

export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/top_rated', {
      params: {
        page: options?.page ?? 1
      }
    })

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching movies - Top Rated')
  }
}