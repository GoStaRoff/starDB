import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import icon from './imagenotfound.svg'

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 7500);
  }

  render() {
    const {
      planet: { id, name, popultauion, rotationPeriod, diameter },
      loading,
      error,
    } = this.state;
    if (error) {
      return (
        <div className="rnd-planet-form">
          <img
            className="errImage"
            alt="errorimage"
            src={`https://cdn.custom-cursor.com/packs/443/pack404.png`}
          />
          <p className="err-text">Could not find the planet</p>
        </div>
      );
    }
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
            className="planet-image"
            alt="planet"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            
            onError = {(e)=>{e.target.onerror = null; e.target.src=icon}}
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
