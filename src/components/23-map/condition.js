import Greet from "../Greet";
import Listitems from "../List/listitems";

const Buttongo=()=>{
    const login =false;


    return(
        <>
        {
            login
             ?
             <Greet/>
            //  <button>true button</button>
             :
            //  <button>false button</button>
            <Listitems/>

        }
       </>
    )
   
        // if(login){
        //     return (
        //         <button>True</button>
        //     )
        // }
        // else{
        //     return (
        //         <button>false button</button>
        //     )
        // }

       
    
}
export default Buttongo