import { useEffect } from "react"
import { useState } from "react"

function Hook(){
    const[count,setcount]=useState(0)
    const[name,setName]=useState('')
    useEffect(()=>{
        console.log(`updating the count`)
        document.title=` ${count} times`
    },[count])
    return(
        <>
       
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        name:{name}
       <h1>you clicked no.of times:  {count}</h1> 
       <button onClick={()=>setcount(count+1)}>count:{count}</button>
        </>
    )
}
export default Hook