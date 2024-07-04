import React from "react";
import { Component } from "react";

class Classprop extends Component {
  render() {
    return (
        <>
      <h1>
        hey {this.props.name}, welcome{this.props.greet}
      </h1>
      <p>hi {this.props.children}</p>
      </>
    );
  }
}
export default Classprop;
