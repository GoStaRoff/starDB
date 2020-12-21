import React from "react";
import Header from "../header/header";
//import ItemsList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
//import PlanetDetails from "../planet-details/planet-details";
//import StarshipDetails from "../starship-details/starship-details";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";

const App = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <RandomPlanet />

        <div className="row">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
