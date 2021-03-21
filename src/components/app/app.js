import React from "react";
import Header from "../header/header";
import "./app.css";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import ErrorBoundry from "../error-boundry/error-boundry";
import DummySwapiService from "../../services/dummy-swapi-sevice";
import {
  LoginPage,
  PeoplePage,
  PlanetPage,
  StarshipPage,
  SecretPage,
} from "../pages";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { StarshipDetails } from "../sw-components";

export default class App extends React.Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/" exact>
                  <h2 style={{ textAlign: "center" }}>Welcome to starDB</h2>
                </Route>
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" exact component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    return <StarshipDetails itemId={match.params.id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={this.state.isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={this.state.isLoggedIn} />
                  )}
                />
                <Redirect to="/"/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
