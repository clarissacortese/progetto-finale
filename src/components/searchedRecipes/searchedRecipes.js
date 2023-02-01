import { useState, useEffect, useCallback } from "react";
import SearchBar from "../searchBar/searchBar";
import MyCard from "../atoms/card";
import _ from "lodash";
import recipesApi from "../recipesApi";

export default function SearchedRecipes() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const getSearchedRecipes = useCallback(async () => {
    setData(await recipesApi.getSearchedRecipes());
  }, [setData]);

  useEffect(() => {
    getSearchedRecipes();
  }, [searchValue, getSearchedRecipes]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  if (!searchValue) {
    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="my-5">
          <h2 className="text-center">
            You'll see the results of your search here:
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="my-5">
          <h2 className="text-center">
            Here are results based on your search:
          </h2>
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
}
