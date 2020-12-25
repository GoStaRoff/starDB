import React from "react";
import Header from "../header/header";
//import ItemsList from "../item-list/item-list";
import "./app.css";
//import PlanetDetails from "../planet-details/planet-details";
//import StarshipDetails from "../starship-details/starship-details";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator"

export default class App extends React.Component {
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

    if (this.state.hasError) {
      return <ErrorIndicator/>
    } else {
      return (
        <div className="stardb-app">
          <Header className="header" />
          {planet}

          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
          <PeoplePage />
          <PeoplePage />
          <PeoplePage />
        </div>
      );
    }
  }
}
