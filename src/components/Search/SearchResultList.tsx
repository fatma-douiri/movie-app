import React, { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Spinner from '../Spinner/Spinner';
import { fetchMovies } from '../../services/api';
import { Movie } from '../../types/movie';

interface SearchResultListProps {
  addToFavoritesList: (movie: Movie) => void;
  favoritesList: Movie[];
  className: string;
}
const SearchResultList: React.FC<SearchResultListProps> = ({
  addToFavoritesList,
  favoritesList,
  className,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const { data, error, isLoading }: UseQueryResult<Movie[]> = useQuery({
    queryKey: ['movies', { debouncedSearch }],
    queryFn: () => fetchMovies(debouncedSearch),
  });

  useEffect(() => {
    if (data || error) {
      setLoading(false);
    }
  }, [data, error]);

  const handleSearch = (term: string) => {
    setLoading(true);
    setSearchTerm(term);
  };

  const handleAddToFavorites = (movie: Movie) => {
    addToFavoritesList(movie);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={className}>
      <div className="border-b p-2 mb-2">Rechercher</div>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        setDebouncedSearch={setDebouncedSearch}
      />
      <div className="flex flex-col flex-grow mt-3">
        {loading || isLoading ? (
          <Spinner />
        ) : (
          data?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToFavorites={() => handleAddToFavorites(movie)}
              isFavorite={favoritesList.some((favorite) => favorite.id === movie.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResultList;
