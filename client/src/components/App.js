import React, { Component } from "react";
import FoodSection from "components/FoodSection";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <Route path="/">
            <div>home</div>
          </Route>
          <Route exact path="/food" component={FoodSection} />
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
