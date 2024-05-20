import React from "react"

const UseEffectTask=()=>{
    const [product,setProduct]=useState([])
    const [productId,setProductId]=useState({})
  

useEffect(()=>{
    fetchData()
},[])
useEffect(()=>{
    fetchEachProduct()
},[])


// To fetch the all products
const fetchData=async()=>{
 
     const response=await axios.get('https://fakestoreapi.com/products')
     console.log(response)
     if(response.status===200){
     setProduct(response.data)
 
     }
     
}
const fetchEachProduct=async(id)=>{
    const response=await axios.get(`https:fakestoreapi.com/products/${id}`)
    console.log(response)
    if(response.status===200){
    setProductId(response.data)
   
    }
}



return(
  
    <>
    
    
    {
        checkArrayLengthExist(product) ? 
        <React.Fragment>
           
            {
        product.map((each)=>{
           return( <>
            <button key={each.id} onClick={()=>fetchEachProduct(each.id)}>{each.id}</button>
            </>
           )
        })
    } 
    
    {productId&&<CardComponent products={productId}/>}
        </React.Fragment>
        :
        <h3>Something went wrong</h3>
    }
    </>


)
}
export default  UseEffectTask