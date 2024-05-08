// import Imagess from "../image"

let Cards=(props)=>{
  console.log(props)
  
  const{title,description,image,price}=props.data
    return (
        <div className="card" style={{ width: 250   }}>
  <img className="card-img-top" src={image} alt="img not sound" style={{height:"250px"}} />
  {/* <Imagess src={image}/> */}
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    {/* <p className="card-text">{description}</p> */}
    <h1 className="card-text">{price} $</h1>
    {/* <a href="#" className="btn btn-primary">
      {price}
    </a> */}
  </div>
</div>

 
    )
}
export default Cards