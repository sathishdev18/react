import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import Service from "./Routing/Service";
import About , {Orders,Profile} from "./Routing/About";


function Header(){
  return(
    <ul style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      gap:"50px",
      
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/service">Service</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}


function App() {
  

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/about" element={<About/>} >
      <Route path="orders" element={<Orders/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  
  
  )
    }

   

export default App;
