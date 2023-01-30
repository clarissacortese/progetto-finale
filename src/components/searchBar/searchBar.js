import {useState} from 'react';
import "./searchBar.css"
import MyButton from '../atoms/button/button';

export default function SearchBar({ onSearch }) {
  
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  }

  return (
    <div className="mx-auto my-5">
    <h2 className="text-center">Let's search!</h2>
    <br />
    <form onSubmit={handleSubmit} className="mx-5 d-flex justify-content-center">
    <input className="searchBar"
      name="search"
      type="search"
      value={inputValue}
      onChange={handleChange}
    />
    <MyButton text="Search" className="searchButton" style={{
      borderRadius: "0 20px 20px 0",
      width: "14%",
      marginLeft: "-1px",
    }}/>
    </form>
    </div>
  )
}