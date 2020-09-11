import React, { Component } from "react";

import Spinner from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return <Spinner type="Circles" color="#00BFFF" height={80} width={80} />;
  }
}
