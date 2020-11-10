import React, { useCallback, useContext } from "react";
import RubixContext from "../../context/rubix/rubixContext";
import debounce from "lodash.debounce";

import { MyFormInuput, MyForm, SearchIcon } from "./SearchForm.elements";

const SearchForm = () => {
  const rubixContext = useContext(RubixContext);

  const { setQuery, tempQueryValue, setTempQueryValue } = rubixContext;

  const debounceSaveQuery = useCallback(
    debounce((newQueryValue) => setQuery(newQueryValue), 1000),
    []
  );

  const handleQueryChange = (e) => {
    let newQueryValue = e.target.value;
    setTempQueryValue(newQueryValue);
    debounceSaveQuery(newQueryValue);
  };

  return (
    <MyForm onSubmit={(e) => e.preventDefault()}>
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
