import React from 'react';
import { ReactDOM } from 'react';
import SearchBar from './App/components/SearchBar';
import AboutUs from './App/components/AboutUs';
import NotFound from './App/components/NotFound';
import Home from './App/components/Home';
import { Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="search" element={<SearchBar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <>
          <Link to="about">Click to view our about page</Link>
          <Link to="search">Click to view our search page</Link>
          <Link to="404">Click to view our 404 page</Link>
        </>
      </div>
    );
  }
}

export default App;
