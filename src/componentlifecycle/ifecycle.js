import { Component } from "react";
// import { Card } from "react-bootstrap";
import Cards from "../components/card/card";
import axios from "axios";

export class Lifecycle extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      greet: "morning",
      Products: [],
      dummyproduct:[]
    };

  }
 
  
  componentDidMount() {
    console.log(" componentDidMount");
    this.fetchData();
   

  
    // fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(json=>{
    //         this.setState({
    //             Products:json
    //         })
    // })
  }

  fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    if (response.status === 200) {
      this.setState({
        Products: response.data,
        dummyproduct:response.data,
        
      });
    } else {
      alert("something wrong");
    }
  };
  
  clickaction=(cg)=>{
    const cat=this.state.dummyproduct.filter((ele)=>{
      return ele.category==cg
    })
    this.setState({
      Products:cat
    })
  }

  everyaction=(all)=>{
    const catee=this.state.dummyproduct.map((vall)=>{
      return vall
    })
    this.setState({
      Products:catee
    })
  }

  static getDerivedStateFromProps() {
    console.log("getderived");
    return null;
  }
  render() {
    console.log("render");
    
    return (
      <div style={{flexDirection:"row",flex:1,display:"flex",flexWrap:"wrap"}}>
        <button style={{height:'50px', width:"140px"}} onClick={()=>this.clickaction("women's clothing")}>Women'sclothing👧</button>
        <button style={{height:'50px', width:"140px"}} onClick={()=>this.clickaction("men's clothing")}>Mensclothing👦</button>
        <button style={{height:'50px', width:"140px"}} onClick={()=>this.clickaction("jewelery")}>Jewelery💍</button>
        <button style={{height:'50px', width:"140px"}} onClick={()=>this.everyaction(this.state.Products)}>All Products</button>
        <button style={{height:'50px', width:"140px"}} onClick={() => this.clickaction("electronics")}>electronics</button>

        {/* <h1>Mounting</h1> */}
        {
        this.state.Products.length > 0 ?
        
          this.state.Products.map((each) =>{
          return(
            <div key={each.id}  style={{border:'1px solid White',borderRadius:'9px',padding:'20px', width:"280px", margin:"10px",boxShadow:"1px 1px 20px 1px"}}>
              {/* <h1>{each.title}</h1> */}
              <Cards data={each} />
            </div> 
          )
          })
          :<button style={{marginLeft:'500px',fontSize:"50px",marginTop:"200px"}} className="btn btn-primary">
          <span className="spinner-border spinner-border-sm" />
          Loading..
        </button>
        
        }
      </div>
    );
  }
}
