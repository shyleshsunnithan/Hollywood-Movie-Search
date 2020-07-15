import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";
import styles from "./style.css"

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Hollywood Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));