import React, { Component } from "react";
import "./people-page.css";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends React.Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    } else {
      return (
        <div className="row mb2 page">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      );
    }
  }
}
