import React, { useState } from 'react';
import ItemCard from './../ItemCard/ItemCard';
import { Movie } from '../../types/movie';

interface FavCardProps {
  movie: Movie;
  onAddToWatchList: () => void;
  onRemoveFromFavoritesList: () => void;
  onRemoveFromWatchList: () => void;
  isWachList: boolean;
}

const FavCard: React.FC<FavCardProps> = ({
  movie,
  onAddToWatchList,
  onRemoveFromFavoritesList,
  onRemoveFromWatchList,
  isWachList,
}) => {
  const [isChecked, setIsChecked] = useState(isWachList);
  const onToggleWatchList = () => {
    if (isChecked) {
      setIsChecked(!isChecked);
      onRemoveFromWatchList();
    } else {
      setIsChecked(!isChecked);
      onAddToWatchList();
    }
  };
  return (
    <ItemCard
      movie={movie}
      classNameContainer={`flex items-center place-content-between border-b py-2 pr-2`}
      actionButton={
        <div className="flex flex-col justify-center content-center">
          <input
            className="mb-2"
            name="fav"
            type="checkbox"
            onChange={onToggleWatchList}
            checked={isChecked}
          />

          <button className="bg-slate-50 p-1" onClick={onRemoveFromFavoritesList}>
            Supprimer de ma liste
          </button>
        </div>
      }
    />
  );
};

export default FavCard;
