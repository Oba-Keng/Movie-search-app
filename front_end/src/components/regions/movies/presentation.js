import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Form, FormGroup, Label, FormText } from "reactstrap";
import axios from "axios";
class Movie extends Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      movies: [],
      movie: [],
      newMovieModal: false,
      addedMovies: {
        title: ""
      }
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

  // componentWillMount() {

  // }

  addMovies = () => {
    axios
      .get(`http://localhost:3000/movies`, this.addedMovies)
      .then(response => {
        let { movies } = this.state;

        movies.push(response.data);

        this.setState({ movies });
      });
  };

  render() {
    let movies = this.state.movies.map(movie => {
      return (
        <tr>
          <td>{movie.title}</td>
        </tr>
      );
    });
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
          <br></br>
          <p>Press button below to add new movies to your list!</p>
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
            <br></br>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title </Label>
                <Input
                  value={this.state.addedMovies.title}
                  onChange={e => {
                    let { addedMovies } = this.state;
                    addedMovies.title = e.target.value;

                    this.setState({
                      addedMovies
                    });
                  }}
                  id="title"
                  placeholder="placeholder"
                />
              </FormGroup>
            </ModalBody>
            <br></br>

            <ModalFooter>
              <Button color="danger" onClick={this.addMovies.bind(this)}>
                Enter{" "}
              </Button>{" "}
              <Button
                color="danger"
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
