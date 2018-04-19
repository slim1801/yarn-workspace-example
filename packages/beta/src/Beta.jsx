import React, { Component } from "react";

export default class Beta extends Component {
  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}
