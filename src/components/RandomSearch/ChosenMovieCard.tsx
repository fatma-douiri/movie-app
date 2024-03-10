import React, { useEffect, useState } from 'react';
import useRandomChoose from '../../hooks/useRandomChoose';
import ItemCard from '../ItemCard/ItemCard';
import Spinner from '../Spinner/Spinner';
import { Movie } from '../../types/movie';

interface ChosenMovieCardProps {
  watchList: Movie[];
  className: string;
}

const ChosenMovieCard: React.FC<ChosenMovieCardProps> = ({ watchList, className }) => {
  const { randomMovie, chooseRandomMovie } = useRandomChoose(watchList);
  const [loading, setLoading] = useState(false);

  const handleChooseRandom = () => {
    setLoading(true);
    chooseRandomMovie();
  };

  useEffect(() => {
    if (randomMovie || !watchList.length) {
      setLoading(false);
    }
  }, [randomMovie, watchList.length, loading]);

  return (
    <div className={className}>
      {loading ? (
        <Spinner />
      ) : (
        <ItemCard
          movie={randomMovie}
          classNameContainer={'flex flex-row-reverse h-full items-center max-md:flex-col'}
          showDescription={true}
          actionButton={
            <button
              className={`bg-slate-50 p-1 ${watchList.length ? 'cursor-pointer' : 'cursor-not-allowed grayscale-100 opacity-50'}`}
              onClick={handleChooseRandom}
              disabled={!watchList.length}
            >
              Je vais regarder quoi ce soir ?
            </button>
          }
        />
      )}
    </div>
  );
};

export default ChosenMovieCard;
