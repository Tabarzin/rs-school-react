import React from 'react';
import Cards from './Cards';
import SearchBar from './SearchBar';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <Cards />
      </>
    );
  }
}

export default Home;
