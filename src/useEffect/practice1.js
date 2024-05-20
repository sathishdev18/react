import React, { useEffect, useState } from 'react'

function Practice1() {
    let [count,setcount]=useState(0)
    let [toggle,settoggle]=useState(true)

    useEffect(()=>{
        console.log("hello",count)
    },[count])

  return (
    <>
        <h1>practice1</h1>
        <h2>{count}</h2>
        <h1 onClick={()=> settoggle(!toggle)}>{toggle ? "subcribed" : "subcribe"}</h1>
    <button onClick={()=>{
      setcount(count+1)
    }}>change</button></>

  )
}

export default Practice1