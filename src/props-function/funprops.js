
export function May2(props){
    let {Name,Age,Role}=props 
    return(
        <>
        <h1>Name:{Name}</h1>
        <h2>Age:{Age}</h2>
        <h3>Role:{Role}</h3>
        
        </>
    )
}


// import React from "react";

// export class May2 extends React.Component{

//     render(){
//         let {Name,Age,Role}=this.props  //Destructing
//         return(
//             <>
//             <h1>Name:{Name}</h1>
//             <h2>Age:{Age}</h2>
//             <h3>Role:{Role}</h3>
            
//             </>
//         )
//     }
// }