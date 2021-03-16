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
import ItemDetails, { Record } from "../item-details/item-details";
import {
  SwapiServiceConsumer,
  SwapiServiceProvider,
} from "../swapi-service-context/swapi-service-context";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

            <Row left={<PersonList />} right={<PersonDetails itemId={2} />} />

            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={2} />}
            />

            <Row left={<PlanetList />} right={<PlanetDetails itemId={2} />} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
