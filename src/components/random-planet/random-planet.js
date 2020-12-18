import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  render() {
    const {
      planet: { id, name, popultauion, rotationPeriod, diameter },
      loading,
    } = this.state;
    if (loading) {
      return (
        <div className="rnd-planet-form">
          <div className="spinner">
            <Spinner />
          </div>
        </div>
      );
    } else {
      return (
        <div className="rnd-planet-form">
          <img
            alt="planet"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          />
          <div>
            <h2 className="flex">{name}</h2>
            <ul className="info-list">
              <li>Population : {popultauion}</li>
              <li>Rotation Period : {rotationPeriod}</li>
              <li>Diameter : {diameter}</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}
