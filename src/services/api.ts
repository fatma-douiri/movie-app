import axios from 'axios';
import { Movie, ResponseApiShowsEntity, ResponseApiSearchEntity } from '../types/movie';

const API_BASE_URL = 'https://api.tvmaze.com';

export const fetchMovies = async (searchTerm = ''): Promise<Movie[]> => {
  const url = searchTerm ? `${API_BASE_URL}/search/shows?q=${searchTerm}` : `${API_BASE_URL}/shows`;
  try {
    const response = searchTerm
      ? await axios.get<ResponseApiSearchEntity[]>(url)
      : await axios.get<ResponseApiShowsEntity[]>(url);

    const movies: Movie[] = response.data.map((el) => {
      const show = searchTerm
        ? (el as ResponseApiSearchEntity).show
        : (el as ResponseApiShowsEntity);

      return {
        id: show.id,
        title: show.name,
        image: show.image ? show.image.original : 'DEFAULT_IMAGE_URL',
        year: show.premiered ? show.premiered.split('-')[0] : 'UNKNOWN_YEAR',
        rating: show.rating?.average || 0,
        averageRuntime: show.runtime || 0,
        summary: show.summary,
      };
    });

    return movies;
  } catch (error) {
    console.error('Fetch movies ERROR:', error);
    throw new Error('Failed to fetch movies');
  }
};
