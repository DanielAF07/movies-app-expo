import { AxiosAdapter } from "./http/axios.adapter";


const apiKey = process.env.EXPO_PUBLIC_TMDB_API_KEY ?? ''

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: apiKey
  }
})