import React, { Component } from "react";
import "./people-page.css";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
      >
        {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
      </ItemList>
    );

    const itemDetails = <ItemDetails itemId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry className="page">
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
