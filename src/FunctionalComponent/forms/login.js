import { useState } from "react";

function Login(){

    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')


     return(
        <>
        <div className="border w-25 mt-5 m-auto p-3">
        <h2 className="text-primary text-center">Login Form</h2>
        </div>

        <div >
            <label>Email</label>
            <input type="email" 
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}     />
        <div>
            <div>
                <label>password</label>
                <input type="password" value={password}
                onChange={(et)=>{
                    setpassword(et.target.value)
                }}/>
            </div>
            <button onClick={()=>{
                console.log("email",email)
                console.log("password",password)
            }}>Login</button>
        </div>
        
        </div>
        
        </>
     )
}
export default Login