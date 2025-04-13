import { FC } from "react";

import cl from "./Search.module.scss";

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Search: FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <div className={cl.search}>
      <input
        type="text"
        placeholder="Search title..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
