import { useEffect, useState } from "react"
import * as UseCases from '@/src/core/use-cases'
import { movieDBFetcher } from "@/src/config/adapters/movieDB.adapter"
import { FullMovie } from "@/src/core/models/movie.model"
import { Cast } from "@/src/core/models/cast.model"

const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie>()
  const [cast, setCast] = useState<Cast[]>([])

  useEffect(() => {
    loadMovie()
  }, [movieId])

  const loadMovie = async () => {
    setIsLoading(true)
    const fullMoviePromise = UseCases.getByIdUseCase(movieDBFetcher, movieId)
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId)

    const [fullMovie, movieDBcast] = await Promise.all([fullMoviePromise, castPromise])

    setMovie(fullMovie)
    setCast(movieDBcast)
    setIsLoading(false)
  }

  return {
    movie,
    cast,
    isLoading
  }
}
export default useMovie