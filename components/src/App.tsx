import React from 'react';
import { ReactDOM } from 'react';
import SearchBar from './App/components/SearchBar';
import AboutUs from './App/components/AboutUs';
import NotFound from './App/components/NotFound';
import Home from './App/components/Home';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="search" element={<SearchBar />} />
          <Route path="404" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
