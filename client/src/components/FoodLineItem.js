import React, { Component } from "react";

const FoodLineItem = props => {
  return (
    <tr>
      <td>{props.item.food.toUpperCase()}</td>
      <td>{props.item.date}</td>
      <td>{props.item.notes}</td>
    </tr>
  );
};

export default FoodLineItem;
