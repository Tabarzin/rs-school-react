import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the home page</h1>
        <Link to="about">Click to view our about page</Link>
        <Link to="search">Click to view our search page</Link>
        <Link to="404">Click to view our 404 page</Link>
      </div>
    );
  }
}

export default Home;
