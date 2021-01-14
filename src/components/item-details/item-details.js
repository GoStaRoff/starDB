import React from "react";
import "./item-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ItemDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: false,
    hasError: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem(prevState.item);
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({ loading: true });
    getData(itemId).then((item) => {
      this.setState({ item, loading: false, image: getImageUrl(item) });
    });
  }

  render() {
    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.item;
    const { loading, image } = this.state;
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    if (!loading) {
      return (
        <div className="item-details card">
          <img className="item-image" src={image} alt="character" />

          <div className="card-body">
            <h4>{name}</h4>
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
            <ErrorButton className="errorButton" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="item-details card">
          <Spinner />
        </div>
      );
    }
  }
}
