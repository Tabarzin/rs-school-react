import React from 'react';
import { ReactDOM } from 'react';
import SearchBar from './App/components/SearchBar';
import AboutUs from './App/components/AboutUs';
import NotFound from './App/components/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <AboutUs />
        <NotFound />
      </>
    );
  }
}

export default App;
