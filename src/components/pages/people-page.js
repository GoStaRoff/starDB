import React from "react";
import { withRouter } from "react-router-dom";
import { PersonDetails } from "../sw-components";
import { PersonList } from "../sw-components/item-lists";
import Row from "../row/row";

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
