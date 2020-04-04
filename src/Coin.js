import React from "react";
import PropTypes from "prop-types";

function Coins({ id, name, rank, price }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>가격 : {price}</li>
        <li>{rank}위</li>
      </ul>
    </div>
  );
}

Coins.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Coins;
