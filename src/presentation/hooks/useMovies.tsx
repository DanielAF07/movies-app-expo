import { movieDBFetcher } from "@/src/config/adapters/movieDB.adapter"
import { Movie } from "@/src/core/models/movie.model"
import * as UseCases from "@/src/core/use-cases"
import { useEffect, useState } from "react"

let popularPage = 1
let nowPlayingPage = 1
let topRatedPage = 1
let upcomingPage = 1

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])

  useEffect(() => {
    initLoad()
  }, [])

  const initLoad = async () => {
    const fetchs = [
      UseCases.moviesNowPlayingUseCase(movieDBFetcher),
      UseCases.moviesPopularUseCase(movieDBFetcher),
      UseCases.moviesTopRatedUseCase(movieDBFetcher),
      UseCases.moviesUpcomingUseCase(movieDBFetcher),
    ]
    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ] = await Promise.all(fetchs)

    setNowPlaying(nowPlayingMovies)
    setPopular(popularMovies)
    setTopRated(topRatedMovies)
    setUpcoming(upcomingMovies)

    setIsLoading(false)
  }

  const popularNextPage = async () => {
    popularPage++
    const nextMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, { page: popularPage })
    setPopular([...popular, ...nextMovies])
  }
  const nowPlayingNextPage = async () => {
    nowPlayingPage++
    const nextMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher, { page: nowPlayingPage })
    setNowPlaying([...nowPlaying, ...nextMovies])
  }
  const topRatedNextPage = async () => {
    topRatedPage++
    const nextMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, { page: topRatedPage })
    setTopRated([...topRated, ...nextMovies])
  }
  const upcomingNextPage = async () => {
    upcomingPage++
    const nextMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher, { page: upcomingPage })
    setUpcoming([...upcoming, ...nextMovies])
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    popularNextPage,
    nowPlayingNextPage,
    topRatedNextPage,
    upcomingNextPage
  }
}
export default useMovies