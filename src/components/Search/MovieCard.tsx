import React, { useEffect, useState } from 'react';
import ItemCard from './../ItemCard/ItemCard';
import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
  onAddToFavorites: () => void;
  isFavorite: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onAddToFavorites, isFavorite }) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(isFavorite);
  }, [isFavorite]);
  return (
    <ItemCard
      movie={movie}
      classNameContainer={'flex items-center place-content-between border-b py-2 pr-2'}
      actionButton={
        <button
          className={`bg-slate-50 p-1 ${!disabled ? 'cursor-pointer' : 'cursor-not-allowed grayscale-100 opacity-50'}`}
          onClick={onAddToFavorites}
          disabled={disabled}
        >
          Ajouter à ma liste
        </button>
      }
    />
  );
};

export default MovieCard;
