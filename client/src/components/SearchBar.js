import React, { Component } from "react";
import styled from "styled-components";
import { Form, FormGroup, FormControl, Row, Col } from "react-bootstrap";

const SearchBarWrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
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
    const { input } = this.state;
    saveFood(input);
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
          </SearchBarWrapper>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
