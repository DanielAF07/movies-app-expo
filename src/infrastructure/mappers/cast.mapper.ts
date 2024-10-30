import type { MovieDBCast } from "../interfaces/movie-db.responses";
import { Cast } from "@/src/core/models/cast.model";

export class CastMapper {
  static fromMovieDBToEntity(cast: MovieDBCast): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'No character',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png'
    }
  }
}