import axios from "axios";
import React, { useEffect, useState } from "react";



function Pagination(){
    const[todos,settodos]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[itemPerPage,setItemPerPage]=useState(10)

    const fetchData =async ()=>{
        const response =await axios.get("https://jsonplaceholder.typicode.com/todos")
        settodos(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const lastItemIndex=currentPage * itemPerPage
    const firstItemIndex=lastItemIndex - itemPerPage
    const thisPageItems =todos.slice(firstItemIndex ,lastItemIndex)

    const pages =[]

    for(let i=1; i<todos.length/itemPerPage;i++){
        pages.push(i)
    }

    return(
        <>
        <ul >
            {
                thisPageItems.map((todo,index)=>{
                    return(
                        <li key={index} >
                            <p>{todo.title}</p>
                        </li>
                    )
                })
            }
        </ul>
        <nav>
            {
                pages.map((page ,index)=>{
                    return(
                        <button
                        onClick={()=> setCurrentPage(page)}
                        key={index} >
                            {page}
                        </button>
                    )
                })
            }
        </nav>
        </>
    )
}
export default Pagination