import React, { Component } from "react";
import SearchBar from "components/SearchBar";
import FoodLineItem from "components/FoodLineItem";
import { Row, Col, Table } from "react-bootstrap";
import styled from "styled-components";

const FoodSectionWrapper = styled.div`
  position: relative;
  margin-top: 60px;
`;

class FoodSection extends Component {
  constructor() {
    super();
    this.state = {
      foods: []
    };
  }

  saveFood = foodData => {
    const currentFoods = this.state.foods;
    currentFoods.push(foodData);
    this.setState({
      foods: currentFoods
    });
  };

  displayFoods = () => {
    return this.state.foods.map((item, i) => {
      return <FoodLineItem key={i} item={item} />;
    });
  };

  render() {
    console.log(this.state);
    return (
      <FoodSectionWrapper>
        <SearchBar saveFood={this.saveFood} />
        <Table>
          <thead>
            <tr>
              <td>FOOD</td>
              <td>DATE</td>
              <td>NOTES</td>
            </tr>
          </thead>
          <tbody>{this.displayFoods()}</tbody>
        </Table>
      </FoodSectionWrapper>
    );
  }
}

export default FoodSection;
