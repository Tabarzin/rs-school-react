import React from 'react';
import { DebounceInput } from 'react-debounce-input';

class SearchBar extends React.Component {
  constructor(props: string) {
    super(props);

    this.state = {
      term: localStorage.getItem('local'),
    };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ term: e.target.value });
  };

  componentDidMount() {
    console.log('MOUNTED');
  }

  componentDidUpdate() {
    if (this.state.term === '') {
      localStorage.clear();
    } else {
      localStorage.setItem('local', JSON.stringify(this.state.term));
    }
  }

  // componentWillUnmount() {
  //   console.log('UNMOUNT');
  //   localStorage.setItem('local', JSON.stringify(this.state.term));
  // }

  render() {
    return (
      <div className="ui search-bar segment">
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
