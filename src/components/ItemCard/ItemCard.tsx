import React, { useEffect, useRef, useState } from 'react';
import { Movie } from '../../types/movie';
import { formatRuntime } from '../../utils/formatTime';

interface ItemCardProps {
  movie: Movie;
  actionButton: React.ReactNode;
  showDescription?: boolean;
  classNameContainer: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  movie,
  actionButton,
  showDescription,
  classNameContainer,
}) => {
  const [showSummary, setShowSummary] = useState(false);
  const formattedRuntime = formatRuntime(movie?.averageRuntime);
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleToggleSummary = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowSummary(!showSummary);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (summaryRef.current && !summaryRef.current.contains(event.target as Node) && showSummary) {
        setShowSummary(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSummary]);

  return (
    <div
      className={`relative bg-white overflow-auto  ${showDescription && !movie && 'justify-center'} ${classNameContainer} `}
    >
      {showSummary && (
        <div
          ref={summaryRef}
          className="absolute top-2 right-2 p-2 pr-6 bg-slate-50 rounded"
          dangerouslySetInnerHTML={{ __html: movie?.summary }}
        ></div>
      )}
      {!showDescription && (
        <div className={`absolute top-2 right-2 cursor-pointer`}>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleToggleSummary}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </button>
        </div>
      )}
      {movie && (
        <div className={`flex items-center ${showDescription && 'lg:w-1/2 h-full '}`}>
          <img
            className={`object-cover h-auto ${!showDescription && 'w-24 max-md:w-16'}  ${showDescription && 'w-28 max-md:w-20'}`}
            src={movie.image}
            alt="movie_img"
          />
          <div className="pl-3 h-4/5 overflow-auto">
            <ul
              className={`list-none ${!showDescription && 'whitespace-nowrap'} leading-normal overflow-y-auto`}
            >
              <li className="mb-2">{movie.title}</li>
              <li>{formattedRuntime}</li>
              <li>{movie.rating}</li>
              <li>{movie.year}</li>
              {showDescription && <li dangerouslySetInnerHTML={{ __html: movie?.summary }} />}
            </ul>
          </div>
        </div>
      )}

      <div className={`whitespace-nowrap ${showDescription && 'lg:w-1/2 flex justify-center'}`}>
        {actionButton}
      </div>
    </div>
  );
};

export default ItemCard;
