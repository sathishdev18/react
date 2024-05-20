import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Imagess from '../components/image'


function UseEffect1() {
    const [todos,settodos]=useState([])
    const[count,setcount]=useState(0)
    const[age,setAge]=useState(0)
    useEffect(()=>{
        // console.log("useeffect")
        fetchData()
     
    },[])

    useEffect(()=>{
      // console.log("useeffect")
      
      document.title=`Count ${count}`
  },[count,age])

    const fetchData= async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
      console.log('result',res)
      if(res.status===200){
        settodos(res.data)
      }
        
    }

    const raise=()=>{
      setcount(count+1)
      
    }


  return (  
    <>
    <h1>useEffect1</h1>
    <h3>{count}</h3>
    <button onClick={raise}>Count increase</button>
  
    {
      todos.length>0 ?
      <>
      {
        todos.map((each)=>{
          return(
            <React.Fragment key={each.id}>
            <li>{each.title}</li>
            
            </React.Fragment>
          )
        })
      }
      </>
      :
      null

       }
    </>
  )
}

export default UseEffect1