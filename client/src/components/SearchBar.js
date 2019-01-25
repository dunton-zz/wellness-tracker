import React, { Component } from "react";
import styled from "styled-components";
import {
  Form,
  FormGroup,
  FormControl,
  Row,
  Col,
  Button
} from "react-bootstrap";
import callDate from "functions/callDate";

const SearchBarWrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 15px;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      notes: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { saveFood } = this.props;
    const { input, notes } = this.state;
    const date = callDate();
    const foodInput = { food: input, date, notes };
    saveFood(foodInput);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <Row>
        <Col md={12}>
          <SearchBarWrapper>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl
                  value={this.state.input}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="What did you eat today..."
                />
              </FormGroup>
            </Form>
            <ButtonHolder>
              <Button>ADD NOTES</Button>
              <Button>SEE DATA</Button>
            </ButtonHolder>
          </SearchBarWrapper>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
