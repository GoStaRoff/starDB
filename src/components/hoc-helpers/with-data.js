import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View) => {
  return class extends Component {
    state = {
      loading: true,
      error: false,
      data: null,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({ loading: true });
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
          });
        })
        .catch(() => {
          this.setState({ error: true });
        })
        .then(() => {
          this.setState({ loading: false, error: false });
        });
    }
    render() {
      const { data, loading, error } = this.state;

      if (!data || loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
