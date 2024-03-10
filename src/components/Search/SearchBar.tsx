import React, { useEffect } from 'react';
import { useDebounce } from 'use-debounce';

interface SearchBarProps {
  onSearch: (term: string) => void;
  setDebouncedSearch: (term: string) => void;
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchTerm, setDebouncedSearch }) => {
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  useEffect(() => {
    setDebouncedSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setDebouncedSearch]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border p-3 w-full"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Rechercher..."
      />

      <div className="absolute right-3 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};
export default SearchBar;
