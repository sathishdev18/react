import React from "react";

class Stss extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "hello",
      age:'22'
    };

    // Bind the Change method to this
    this.Change = this.Change.bind(this);
  }

  Change() {
    this.setState({
      msg: "Hey, it's React",
      age:'19'
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.msg}{this.state.age}</h1>
        <button onClick={this.Change}>Click</button>
      </>
    );
  }
}

export default Stss;
