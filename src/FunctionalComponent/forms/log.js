import React,{useState} from "react";

function Loginn(){
    const[data,setData]=useState({
        username:'',
        password:''
    })
    let {username,password}=data;
    return(
        <div>
            <center>
              <form>
                <h1>Login</h1>
                <br/><input type="text" name="username" value={username} /> <br/><br/>
                <input type="password" name="password" value={password}/><br/><br/>
                <input type="submit" name="submit"></input>
              </form>
            </center>
        </div>
    )
}
export default Loginn