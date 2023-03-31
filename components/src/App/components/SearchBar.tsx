import React from 'react';
import { DebounceInput } from 'react-debounce-input';

class SearchBar extends React.Component {
  constructor(props: string) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(this.state);
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          value={this.state.term}
          type="text"
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
