import React from "react";
import Header from "../header/header";
//import ItemsList from "../item-list/item-list";
import "./app.css";
//import PlanetDetails from "../planet-details/planet-details";
//import StarshipDetails from "../starship-details/starship-details";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details/item-details";
import Row from "../row/row";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const starshipDetails = (
      <ItemDetails
        getData={this.swapiService.getPlanet}
        getImageUrl={this.swapiService.getPlanetImage}
        itemId={3}
      />
    );
    const personDetails = (
      <ItemDetails
        itemId={3}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      />
    );
    if (this.state.hasError) {
      return <ErrorIndicator />;
    } else {
      return (
        <div className="stardb-app">
          <Header className="header" />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      );
    }
  }
}
