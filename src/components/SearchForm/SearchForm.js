import React, { useCallback } from "react";
import { useGlobalContext } from "../../context";
import debounce from "lodash.debounce";

import { MyFormInuput, MyForm, SearchIcon } from "./SearchForm.elements";

const SearchForm = () => {
  const {
    setQuery,
    tempQueryValue,
    setTempQueryValue,
    setIsLoading,
  } = useGlobalContext();

  const debounceSaveQuery = useCallback(
    debounce((newQueryValue) => setQuery(newQueryValue), 1000),
    []
  );

  const handleQueryChange = (e) => {
    let newQueryValue = e.target.value;
    setTempQueryValue(newQueryValue);
    debounceSaveQuery(newQueryValue);
    setIsLoading(false);
  };

  return (
    <MyForm>
      <SearchIcon />
      <MyFormInuput
        type="text"
        placeholder="Search"
        value={tempQueryValue}
        onChange={(e) => handleQueryChange(e)}
      />
    </MyForm>
  );
};

export default SearchForm;
