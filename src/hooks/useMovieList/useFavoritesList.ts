import useMovieList from './useMovieList';

export const useFavoritesList = () => {
  const { movieList, addToMovieList, removeFromMovieList } = useMovieList('FavoritesList');

  return {
    favoritesList: movieList,
    addToFavoritesList: addToMovieList,
    removeFromFavoritesList: removeFromMovieList,
  };
};
