import React from "react";
import "./App.css";
import OmdbClient from "./omdb";
import AddMovies from "./components/regions/list_of_movies";

function App() {
  return (
    <div>
      <OmdbClient />
      <AddMovies />
    </div>
  );
}

export default App;
