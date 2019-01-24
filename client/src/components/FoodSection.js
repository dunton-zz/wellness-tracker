import React, { Component } from "react";
import SearchBar from "components/SearchBar";
import { Row, Col, Table } from "react-bootstrap";

class FoodSection extends Component {
  constructor() {
    super();
    this.state = {
      foods: []
    };
  }

  saveFood = food => {
    const currentFoods = this.state.foods;
    currentFoods.push(food);
    this.setState({
      foods: currentFoods
    });
  };

  displayFoods = () => {
    return this.state.foods.map(food => {
      return (
        <tr>
          <td>{food}</td>
          <td>DATE</td>
          <td>NOTES</td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar saveFood={this.saveFood} />
        <Table>
          <tbody>{this.displayFoods()}</tbody>
        </Table>
      </div>
    );
  }
}

export default FoodSection;
