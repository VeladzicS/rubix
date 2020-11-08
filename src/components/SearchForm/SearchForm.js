import React from "react";
import { useGlobalContext } from "../../context";

import { MyFormInuput, MyForm, SearchIcon } from "./SearchForm.elements";

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <MyForm>
      <SearchIcon />
      <MyFormInuput
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </MyForm>
  );
};

export default SearchForm;
