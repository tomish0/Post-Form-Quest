import React, { Component } from "react";

class FormEmployee extends Component {
  state = {
    title: "",
    poster: "",
    comment: ""
  };

  postInfo() {
    const API = "https://post-a-form.herokuapp.com/api/movies/";

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    fetch(API, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else if (!res.poster.includes("https://")) {
          alert("poster is not url, no submission");
        } else {
          alert(`Added the film ${res.title}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Error during employee addition");
      });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="FormFavFilm">
        <h1>Your Favourite Film</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Your Favourite Film:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.filmName}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster:</label>
              <input
                type="url"
                id="poster"
                name="poster"
                placeholder="https://example.com"
                required
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data comment">
              <label htmlFor="comment">Comment:</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                placeholder="Why do you like this film?"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <button onClick={() => this.postInfo()}>Post Info</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormEmployee;
