import React, { Component } from "react";
import Movie from "../components/regions/movies/presentation";

class OmdbClient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>GoodDay,please enter movie you would like to search for below...</p>

        <Movie />
      </div>
    );
  }
}

export default OmdbClient;
