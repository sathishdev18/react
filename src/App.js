import React from "react";
import Componenta from "./Practice-3/context/Componenta";

export const Usercontext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  

  return (
    <>
    <Usercontext.Provider value={'Virat'}>
      <ChannelContext.Provider value={'Kohli'}>
      <Componenta/>
      </ChannelContext.Provider>
    
    </Usercontext.Provider>
 
   </>
  
  )
    }

   

export default App;
