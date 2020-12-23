import React from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: true,
  };

  updatePerson(){
      const {personId} = this.props;
      if(personId){
        return;
      }
      this.swapiService.getPerson(personId).then((person) => {
        this.setState({person});
      });
  }

  onPersonLoaded = (person) => {
    this.setState({ person, loading: false });
  };

  componentDidMount() {
    this.updatePerson();
  }

  render() {
    const { person, loading } = this.state;
    console.log(person);
    if (loading) {
      return (
        <div className="rnd-planet-form">
          <div className="spinner">
            <Spinner />
          </div>
        </div>
      );
    }
    return (
      <div className="person-form">
        <img alt="planet" src="https://hotline.ua/img/tx/184/1847391265.jpg" />
        <div>
          <h3 className="flex">{person.name}</h3>
          <ul className="info-list">
            <li>Gender :{person.gender}</li>
            <li>Birth year : {person.birthYear}</li>
            <li>Eye color : {person.eyeColor}</li>
          </ul>
        </div>
      </div>
    );
  }
}
