import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Title from './Title';
import Footer from './Footer';
import './App.css';


const App = () => {

  const [recipes, setRecipes] = useState([]); //data.hits is an array of objects
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  //useEffect(something, dependency) --> will run 'something' everytime dependency changes, so put an empty array for no change: only activates on first page load.
  useEffect(() => {
    getRecipes();
  }, [query]);

  // as soon as js sees 'await', it will wait for the promise to resolve, and then continue with the rest of the code
  // since it is asynchronous, it will not block the main thread of execution

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`); //change the elements in the query to match ur ID and KEY + query
    const data = await response.json();
    // console.log(data); //see console
    //data.hits contains an array of objects, each object is a recipe
    setRecipes(data.hits);
  }

  //updating 'search' state with the onChange event target value
  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  }

  //updating query when click on search
  const getSearch = (e) => {
    e.preventDefault(); //prevent page refresh when pressing submit
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Title />
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search any food" value={search} onChange={updateSearch} /> {/*passes the onChange event to updateSearch, it needs to be here so can retrieve input value (as opposed to button)*/}
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe">
        {recipes.map(recipe => (
          <Recipe
            //passing the state data as props to the Recipe component
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))};
      </div>
      <Footer />
    </div>
  );
}

export default App;
