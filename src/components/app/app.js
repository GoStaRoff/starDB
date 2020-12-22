import React from "react";
import Header from "../header/header";
//import ItemsList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
//import PlanetDetails from "../planet-details/planet-details";
//import StarshipDetails from "../starship-details/starship-details";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    selectedPerson : null
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = (id) => {

  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
