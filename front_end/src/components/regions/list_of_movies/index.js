import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input } from "reactstrap";
import { FormGroup, Label } from "reactstrap";
import axios from "axios";
// const User = require("models/user.js");

class AddMovies extends Component {
  npm;
  constructor() {
    super();
    this.state = {
      newMovieModal: false,
      addedMovies: {
        title: ""
      }
    };
  }

  toggleNewMovieModal() {
    this.setState({
      newMovieModal: !this.state.newMovieModal
    });
  }

  // addProspect(req, res, next) {
  //   console.log(req.body);
  //   User.create(req.body)
  //     .then(function(user) {
  //       res.send(user);
  //     })
  //     .catch(next);
  // }

  addMovies = event => {
    event.preventDefault();

    axios
      .post(`https://localhost:3000/movies`, this.addedMovies)
      .then(response => {
        console.log(response);
        let { movies } = this.state;

        movies.push(response.data);

        this.setState({ movies });
      });
  };

  render() {
    // let movies = this.state.movies.map(movie => {
    //   return (
    //     <tr>
    //       <td>{movie.title}</td>
    //     </tr>
    //   );
    // });
    return (
      <React.Fragment>
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
              <Button color="danger" onClick={this.addMovies}>
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

export default AddMovies;
