import { FC, useState } from "react";

import cl from "./Search.module.scss";

const Search: FC = () => {
  const [value, setValue] = useState("");
  return (
    <div className={cl.search}>
      <input
        type="text"
        placeholder="Search title..."
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
