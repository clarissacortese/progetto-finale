import "./searchBar.css";

const SearchBarInput = ({ value, onChange }) => (
  <input
    className="searchBar"
    name="search"
    type="search"
    value={value}
    onChange={onChange}
  />
);
export default SearchBarInput;
