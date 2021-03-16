import React from "react";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="RP" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
