import { useEffect } from "react"
import { useState } from "react"


function Timer(){

    const[seconds,setseconds]=useState(0)
    const[minutes,setminutes]=useState(0)

    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setseconds(seconds+1);

            if(seconds===59){
                setminutes(minutes+1)
                setseconds(0)
            }
        },1000)
        return()=>{
            clearInterval(timer);
        }
    })

    const restart=()=>{
        setminutes(0)
        setseconds(0)
    }

   const stop=()=>{
    clearInterval(timer);
    }


    return(
       
        // <main style={{backgroundColor:"green"}}>
        <div style={{display:"grid",justifyContent:"center",alignItems:"center",alignContent:"center",marginTop:"150px"}} >
        <div style={{border:"2px solid black",backgroundColor:"darkcyan",width:"250px",display:"grid",justifyContent:"center",boxShadow:"5px 10px 10px 10px" ,borderRadius:'10px',alignItems:"center",alignContent:"center"}}>
        <h1>Timer</h1>
        <h1>{minutes<10? "0"+minutes:minutes}:{seconds<10 ? "0"+seconds:seconds }</h1>
        <button style={{borderRadius:'10px',width:"70px",position:"relative",left:"-40px",hover:"red"}} onClick={restart}>Restart</button>
        <button style={{borderRadius:'10px',width:"70px",position:"relative",left:"60px",top:"-29px"}} onClick={stop}>stop</button>
        </div>
        </div>
        // </main>
        
    )
}
export default Timer