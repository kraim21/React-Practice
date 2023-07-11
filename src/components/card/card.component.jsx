import { Component } from "react";

import "./card.styles.css";

// const Card = () => {

// }

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monsters;

    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    );
  }
}

export default Card;
