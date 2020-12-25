import React, { Component } from "react";
import "./people-page.css";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        renderItem={(item) =>
          `${item.name} (${item.gender}, ${item.birthYear})`
        }
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
      />
    );

    const itemDetails = <PersonDetails personId={this.state.selectedPerson} />;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    } else {
      return <Row left={itemList} right={itemDetails}/>;
    }
  }
}
