import { useState, useEffect } from "react";
import SearchBar from "../searchBar/searchBar";
import MyCard from "../atoms/card";
import axios from "axios";
import _ from "lodash";

export default function SearchedRecipesApi() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            diet: "vegetarian",
            query: searchValue,
          },
        }
      );
      setData(response.data.results);
    }
    fetchData();
  }, [searchValue]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="my-5">
        <h2 className="text-center">Here are results based on your search:</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {data.map((item) => {
            return (
              <MyCard
                key={_.get(item, "id", "N/A")}
                title={_.get(item, "title", "sorry, something went wron")}
                id={_.get(item, "id", "N/A")}
                img={`https://spoonacular.com/recipeImages/${_.get(
                  item,
                  "id",
                  "N/A"
                )}-556x370.jpg`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}