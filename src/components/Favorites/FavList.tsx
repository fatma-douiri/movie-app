import React from 'react';
import FavCard from './FavCard';
import { Movie } from '../../types/movie';

interface FavListProps {
  favorites: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromFavoritesList: (movie: Movie) => void;
  removeFromWatchList: (movie: Movie) => void;
  watchList: Movie[];
  className: string;
}
const FavList: React.FC<FavListProps> = ({
  favorites,
  addToWatchList,
  removeFromFavoritesList,
  removeFromWatchList,
  watchList,
  className,
}) => {
  return (
    <div className={className}>
      <div className="border-b p-2 mb-2">Ma liste</div>
      {favorites.map((movie) => (
        <FavCard
          key={movie.id}
          movie={movie}
          onAddToWatchList={() => addToWatchList(movie)}
          onRemoveFromFavoritesList={() => removeFromFavoritesList(movie)}
          onRemoveFromWatchList={() => removeFromWatchList(movie)}
          isWachList={watchList.some((show) => show.id === movie.id)}
        />
      ))}
    </div>
  );
};

export default FavList;
