import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import SwapiService from "./services/swapi-service";

const swapi = new SwapiService();

swapi.getStarship(2).then((p) => {
  console.log(p.name);
});

ReactDOM.render(<App />, document.getElementById("root"));
