import React from 'react';
import data from './data';

interface Card {
  id: number;
  firstname: string;
  lastname: string;
  city: string;
  country: string;
  age: number;
}

class Cards extends React.Component {
  dataObj = [...data];

  render() {
    console.log('DataObj', this.dataObj);
    return <h2>Cards</h2>;
  }
}

export default Cards;
