import { Component } from "react";

export class Items extends Component {
  state = {
    product: [
      {
        id: 1,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 0,
      },
      {
        id: 2,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 0,
      },
      {
        id: 3,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 0,
      },
      {
        id: 4,
        image:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/d/e/s-43ma-virat18-royalchallengersbangalore-top-yutu-original-imagzrxmkk4fdjgr.jpeg?q=70",
        namee: "T-shirt",
        count: 0,
      },
    ],
  };

  high = (add, id) => {
    switch (add) {
      case "increment":
        const incre = this.state.product.map((val) => {
          if (val.id === id) {
            val.count += 1;
            return val;
          } else {
            return val;
          }
        });
        this.setState({
          product: incre,
        });
        break;
      case "decrement":
        const decres = this.state.product.map((val) => {
          if (val.count > 0) {
            val.count -= 1;
            return val;
          } else {
            return val;
          }
        });
        this.setState({
          product: decres,
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
     
     
        {this.state.product.map((ele, index) => {
          const { namee, image, id, count } = ele;
          return (
            <>
              {/* <p><span style={{padding:'10px'}}>{this.State.count}</span></p> */}
              <div style={{
                border:"2px solid black"
              }}>
              <h1>{namee}</h1>
              
              <img src={image} height={100} width={100} alt="t-shirt"></img>
            <div style={{
                display:"flex",
                alignItems:"end",
                margin:'50px 0px 10px'
            }}>
              <button onClick={() => this.high("increment", id)}>+</button>
              <button>{count}</button>
              <button onClick={() => this.high("decrement", id)}>-</button>
              </div></div>
              

              
            </>
          );
        })}
     
      </>
    );
  }
}
