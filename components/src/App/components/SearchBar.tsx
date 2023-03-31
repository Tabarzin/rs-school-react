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
      <div className="ui search">
        <div className="ui icon input ">
          <DebounceInput
            className="prompt "
            type="text"
            placeholder="Search cards..."
            minLength={2}
            debounceTimeout={300}
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
