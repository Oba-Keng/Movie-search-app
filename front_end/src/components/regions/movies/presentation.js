import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
        <div>
          <Button color="primary" onClick={this.toggleNewMovie}>
            Add Movie
            {this.props.buttonLabel}
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              dodanger eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
