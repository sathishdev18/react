import React from "react";

class Stss extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"hello"
        };
    }
    
    render(){
        return(
            <>
            <h1>{this.state.msg}</h1>
            </>
        )
    }
}
export default Stss