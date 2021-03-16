import React from "react";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
