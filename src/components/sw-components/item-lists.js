import React from "react";
import ItemList from "../item-list/item-list";
import { withData } from "../hoc-helpers";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const ListWithChildren = withChildFunction(ItemList, ({ name }) => (
  <span>{name}</span>
));

const PersonList = withSwapiService(
  withData(ListWithChildren),
  mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
  withData(ListWithChildren),
  mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
  withData(ListWithChildren),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
