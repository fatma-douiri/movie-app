import SearchResultList from './components/Search/SearchResultList';
import FavList from './components/Favorites/FavList';
import ChosenMovieCard from './components/RandomSearch/ChosenMovieCard';
import { useFavoritesList } from './hooks/useMovieList/useFavoritesList';
import { useWatchList } from './hooks/useMovieList/useWatchList';

const App: React.FC = () => {
  const { favoritesList, addToFavoritesList, removeFromFavoritesList } = useFavoritesList();
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();

  return (
    <div className={'flex flex-col h-screen p-7 bg-slate-50 text-sm'}>
      <div className={'flex flex-col lg:flex-row basis-2/3 overflow-hidden'}>
        <SearchResultList
          className={'basis-1/2 overflow-auto lg:mr-2 mb-4 p-3 border flex flex-col'}
          addToFavoritesList={addToFavoritesList}
          favoritesList={favoritesList}
        />
        <FavList
          className={'basis-1/2 overflow-auto lg:ml-2 mb-4 p-3 border'}
          favorites={favoritesList}
          removeFromFavoritesList={removeFromFavoritesList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
          watchList={watchList}
        />
      </div>

      <ChosenMovieCard className={'basis-1/3 p-3 border overflow-hidden '} watchList={watchList} />
    </div>
  );
};

export default App;
