import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <>
    <div>
      <button><Link to="orders">Orders</Link></button>
      <button><Link to ="profile">Profile</Link></button>
    </div>
    <h1>About Page</h1>
    <Outlet/>
    </>
    
  )
}
 export function Orders(){
  return(
    <h1> This is Orders web</h1>
  )
    
    
  }

  export function Profile(){
    return(
      <h1>This is Profile web</h1>
    )
  }



export default About;