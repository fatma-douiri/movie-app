import { useState, useEffect } from 'react';
import { Movie } from '../../types/movie';

interface MovieListHook {
  movieList: Movie[];
  addToMovieList: (newMovie: Movie) => void;
  removeFromMovieList: (selectedMovie: Movie) => void;
}

const useMovieList = (nameList: string): MovieListHook => {
  const localStorageKey = nameList;
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const storedMovieList = localStorage.getItem(localStorageKey);
    if (storedMovieList) {
      setMovieList(JSON.parse(storedMovieList));
    }
  }, []);

  const addToMovieList = (newMovie: Movie) => {
    setMovieList((prevMovieList) => {
      const updatedList = [...prevMovieList, newMovie];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const removeFromMovieList = (selectedMovie: Movie) => {
    setMovieList((prevMovieList) => {
      const updatedList = prevMovieList.filter((el) => el.id !== selectedMovie.id);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return {
    movieList,
    addToMovieList,
    removeFromMovieList,
  };
};

export default useMovieList;
