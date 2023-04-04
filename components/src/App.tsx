import React from 'react';
import { ReactDOM } from 'react';
import SearchBar from './App/components/SearchBar';
import AboutUs from './App/components/AboutUs';
import NotFound from './App/components/NotFound';
import Cards from './App/components/Cards';

import { Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui pointing menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="about" className="item">
            About Us
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="about" element={<AboutUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cards />
      </div>
    );
  }
}

export default App;
