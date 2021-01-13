import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.value);
    console.log(this.state.value);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row searchbar ">
            <input
              id="search"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
            ></input>
            <button type="submit">
              <ion-icon name="search-sharp"></ion-icon>
            </button>
            <a href="/" className="mic">
              <ion-icon name="mic"></ion-icon>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
