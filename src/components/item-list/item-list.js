import React from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";

export default class ItemList extends React.Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(item.id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (itemList === null) {
      return <Spinner />;
    }
    return (
      <ul className="item-list list-group">{this.renderItems(itemList)}</ul>
    );
  }
}
