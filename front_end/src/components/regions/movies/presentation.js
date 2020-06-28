import React, { Component } from "react";

class Movie extends Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      movies: []
    };
  }

  keywordChanged = e => this.setState({ keyword: e.target.value });

  searchMovie = () =>
    fetch(
      `http://www.omdbapi.com/?apikey=539d07a9&s=${this.state.keyword}`
    ).then(response => response.json().then(this.renderMovies));

  renderMovies = response => this.setState({ movies: response.Search });

  toggleNewMovieModal() {
    this.setState({
      newMovieModal: !this.state.newMovieModal
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input
            value={this.state.keyword}
            onChange={this.keywordChanged}
            placeholder="keyword"
          />

          <button onClick={this.searchMovie}>Search</button>
        </div>
        <div>
          <ul>
            {this.state.movies.map((movie, id) => (
              <li key={id}>{movie.Title}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
