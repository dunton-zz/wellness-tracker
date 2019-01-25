import React, { Component } from "react";
import FoodSection from "components/FoodSection";
import Header from "components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nutritionIxApiKey: ""
    };
  }
  componentWillMount() {
    // make api call to get nutritionIxAppKey
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Grid>
            <Route path="/" />
            <Route exact path="/food" component={FoodSection} />
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
