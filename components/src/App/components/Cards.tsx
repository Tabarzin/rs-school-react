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

  renderedData = this.dataObj.map((card) => {
    // console.log(card);
    return (
      <div key={card.id} className="four wide column ">
        <div className="ui card ">
          <div className="content">
            <span className="header">
              {card.firstname + ' '}
              {card.lastname}
            </span>
            <div className="ui list">
              <div className="item">age : {card.age}</div>
              <div className="item"> city : {card.city} </div>
              <div className="item"> country : {card.country}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  render() {
    return <div className="ui grid container">{this.renderedData}</div>;
  }
}

export default Cards;
