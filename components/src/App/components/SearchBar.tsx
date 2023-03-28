import React from 'react';

class SearchBar extends React.Component {
  constructor(props: string) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
