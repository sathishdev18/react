import { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
    Day: "friday",
  };
  updatecount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  deceresecount = () => {
    this.setState(() => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        });
      }
    });
  };
  Reset=()=>{
    this.setState({
      count:this.state.count=0
    })
  }
  render() {
    return (
      <div style={{color:"ThreeDShadow"}}>
    
      <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.updatecount} style={{backgroundColor:"green" , color:"white"}}>increase</button>
        <button onClick={this.deceresecount} style={{backgroundColor:"red" , color:"white"}}> Decrese</button>
        <button onClick={this.Reset} style={{backgroundColor:"gray" , color:"white"}}>Reset</button>
         </div>
    );
  }
}
