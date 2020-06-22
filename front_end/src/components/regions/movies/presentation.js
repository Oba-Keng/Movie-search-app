import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Form, FormGroup, Label, FormText } from "reactstrap";

class Movie extends Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      movies: [],
      newMovieModal: false
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
      newMovieModal: true
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
        <div>
          <Button color="primary" onClick={this.toggleNewMovieModal.bind(this)}>
            Add Movie
          </Button>
          <Modal
            isOpen={this.state.newMovieModal}
            toggle={this.toggleNewMovieModal.bind(this)}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleNewMovieModal.bind(this)}>
              Add new movie{" "}
            </ModalHeader>
            <ModalBody>
              <InputGroup>
                <Label for="title">Title</Label>
                <Input id="title" placeholder="with a placeholder" />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={this.toggleNewMovieModal.bind(this)}
              >
                Do Something
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.toggleNewMovieModal.bind(this)}
              >
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
