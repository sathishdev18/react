import React from "react";
import Classprop from "./ALearn/props/Classprops";
import Propps from "./ALearn/props/Functionprops";

class App extends React.Component {
  render() {
    return (
      <>
       <Classprop name={'sathish'} greet={'to react'}>
        iam childeren
        <button>Click</button></Classprop>
        <Propps age="22" text="Functional"/>
      </>
    );
  }
}

export default App;
