import { useState } from "react";
import MyButton from "../atoms/button/button";
import SearchBarInput from "./searchBarInput";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="mx-auto my-5">
      <h2 className="text-center">Let's search!</h2>
      <br />
      <form
        onSubmit={handleSubmit}
        className="mx-5 d-flex justify-content-center">
        <SearchBarInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MyButton
          text="Search"
          id="searchButton"
          style={{
            borderRadius: "0 20px 20px 0",
            width: "fit-content",
            marginLeft: "-1px",
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
