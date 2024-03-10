import { useState, useCallback } from 'react';
import { Movie } from '../types/movie';

interface RandomChooseHook {
  randomMovie: Movie;
  chooseRandomMovie: () => void;
}
const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const useRandomChoose = (movies: Movie[]): RandomChooseHook => {
  const [randomMovie, setRandomMovie] = useState<Movie>(() => getRandomElement(movies));

  const chooseRandomMovie = useCallback(() => {
    setRandomMovie(getRandomElement(movies));
  }, [movies]);

  return {
    randomMovie,
    chooseRandomMovie,
  };
};

export default useRandomChoose;
