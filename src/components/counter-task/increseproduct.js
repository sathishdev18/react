import React, { Component } from "react";


 class Items extends Component {
  state = {
    product: [
      {
        id: 1,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 1,
      },
      {
        id: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWafI7Wwydhejcxt83lsVULa5zrgRMeBwCQ&usqp=CAU",
        namee: "TV",
        count: 1,
      },
      {
        id: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCOsJuowC14XZ0lp-U0ygmgiSiJZ-5Aa9_Q&usqp=CAU",
        namee: "I phone",
        count: 1,
      },
      {
        id: 4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05jsLMdO4Dg89Hk1qpxqBQO-TgLPVwhLqKQ&usqp=CAU",
        namee: "Laptop",
        count: 1,
      },
      {
        id: 5,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 1,
      },
      {
        id: 6,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 1,
      },
      {
        id: 7,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 1,
      },
      {
        id: 8,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 1,
      },
    ],
  };

  high = (add, id) => {
    switch (add) {
      case "increment":
        const incre = this.state.product.map((val) => {
          if (val.id===id) {
            val.count += 1;
            return val;
          } else {
            return val;
          }
        });
        this.setState({
          product: incre
        });
        break;
      case "decrement":
        const decres = this.state.product.map((value) => {
          if (value.id===id) {
            if(value.count>0){
              value.count -= 1;
              return value;
            }
            else{
              return value
            }
            // value.count -= 1;
            // return value;
          } else {
            return value;
          }
        });
        this.setState({
          product: decres
        });
        break;

      default:
        break;
    }
    console.log("inc", this.state.count);
  };

  render() {
    
    return (
      <>
      <div style={{flexDirection:"row",flex:1,display:"flex",flexWrap:"wrap",alignItems:"center"}}>
        {this.state.product.map((ele, index) => {
          const { namee, image, id, count } = ele;
          return (
            <>
              {/* <p><span style={{padding:'10px'}}>{this.State.count}</span></p> */}
             
              <div style={{border:'1px solid White',borderRadius:'9px',padding:'20px', width:"280px", margin:"10px",boxShadow:"1px 1px 20px 1px"}}>
              <img src={image} height={200} width={200} alt="t-shirt"></img>
              <h1>{namee}</h1>
            <div style={{display:"flex",justifyContent:"center",margin:' 10px'}}>
              <button onClick={() => this.high("increment", id)}>+</button>
              <button>{count}</button>
              <button onClick={() => this.high("decrement", id)}>-</button>
              </div>
              </div>
              
            </>
          );
        })}
      </div>
    </>
    )
  }
}
export default Items
