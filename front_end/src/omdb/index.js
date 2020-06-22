import React, { Component } from "react";
import Movie from "../components/regions/movies/presentation";

class OmdbClient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Movie />
      </div>
    );
  }
}

export default OmdbClient;
