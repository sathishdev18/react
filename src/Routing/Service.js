import React from 'react'
import { useLocation ,useParams } from 'react-router-dom'

function Service() {
  // let routeparms=useParams()
  let {id,name,num}=useParams()
  let queryparam=useLocation();
  let queryParams=new URLSearchParams(queryparam.search)
  let category=queryParams.get('category');
  let posts=queryParams.get('posts')
  // console.log(queryparam)
  // console.log(routeparms)
  // console.log(routeparms.name)
  return (

   
    <>
     <h1>Service Web</h1>
     <h1>Username:{name}</h1>
     <h1>Userid:{id}</h1>
     <h1>Num:{num}</h1>
     <h1>category:{category}</h1>
     <h1>posts:{posts}</h1>
    </>
  )
}

export default Service