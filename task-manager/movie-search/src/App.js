//do like this
// https://storage.googleapis.com/accio-digital-ocean-data/media/frontend4_mock/frontend4_mock_movie_search.gif
import React, { useState } from "react";
import { createStore } from "redux";

const initialState = {
  searchTerm: "",
  movies: [
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      title: "Schindlers List",
      description:
        "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
    },
    {
      title: "Trapped",
      description:
        "A man struggles to survive after he unintentionally locks himself up in a high rise devoid of food, water and electricity."
    }
  ]
};

// Action Types
const SEARCH_MOVIE = "SEARCH_MOVIE";

// Action Creators
const searchMovie = (searchTerm) => ({
  type: SEARCH_MOVIE,
  payload: searchTerm
});

// Reducer Function
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(movieReducer);

// App Component
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = initialState.movies.filter((movie) =>
    movie.title.includes(searchTerm)
  );

  return (
    <div>
      Enter the title to search Movie: &nbsp;
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
