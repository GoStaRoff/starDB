import React from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  };

  componentDidMount() {
    this.updatePerson();
  } 

  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson(prevState.person);
    }
  }

  throwError(){
    this.foo.bar = 0;
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.setState({ loading: true});
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person, loading: false});
    });
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    const {loading} = this.state;
    
    if (!loading){
      return(
        <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"
        />

        <div className="card-body">
          <h4>
            {name} {this.props.personId}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <button
          className="toggle-planet btn btn-danger btn-lg"
          onClick={this.throwError}
        >
          Threw error
        </button>
        </div>
      </div>
      )
    }
    else{
      return(
        <div className="person-details card">
          <Spinner/>
        </div>
      )
    }
  }
}
