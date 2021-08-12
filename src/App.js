import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = "";
  const APP_KEY = "";

  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getReceipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}
      `);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getReceipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input 
        placeholder="Search recipes" 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipess">
        {recipe.map(recipe => (
          <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          key={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
          link={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;