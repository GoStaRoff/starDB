import React from "react";
import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends React.Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((person) => {
      return (
        <li
          className="list-group-item"
          key={person.id}
          onClick={() => this.props.onItemSelected(person.id)}
        >
          {person.name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (peopleList === null) {
      return <Spinner />;
    }
    return (
      <ul className="item-list list-group">{this.renderItems(peopleList)}</ul>
    );
  }
}
