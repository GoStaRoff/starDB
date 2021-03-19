import React from "react";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="RP" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
