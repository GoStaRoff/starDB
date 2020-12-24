import React from "react";
import Header from "../header/header";
//import ItemsList from "../item-list/item-list";
import './app.css';
//import PlanetDetails from "../planet-details/planet-details";
//import StarshipDetails from "../starship-details/starship-details";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page"

export default class App extends React.Component {
  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  throwError(){
    this.foo.bar = 0;
  }

  componentDidCatch(){
    console.log("catch");
  }


  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    console.log(this.state.selectedPerson)
    return (
      <div className="stardb-app">
        <Header className="header"/>
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <button
          className="toggle-planet btn btn-danger btn-lg"
          onClick={this.throwError}
        >
          Threw error
        </button>
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    );
  }  
}
