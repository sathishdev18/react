import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Buttonsin  from './components/button.js';
import Imagess from './components/image.js';
import Formss from './components/form.js';
import Lt from './components/list.js';
import Bttns from './components/button2.js';
import Listcomponent from './components/List/list-comopenet.js';
import Listcomponents from './components/List/list-comopenet.js';
import Orderlist from './components/List/orderdedlist.js';

import Buttongo from './components/23-map/condition.js';
import Teams from './components/23-map/map.js';
import Iplv from './components/24-4-MFR.js/map-filter-reduce.js';
import Heading from './components/heading/heading.js';
// import Arr from './components/23-map/map.js';

import One from './components/24-4-MFR.js/classcompo/class.js';


import Cards from './components/card/card.js';
import Cr from './components/carousal/carousal.js';
function App() {
//   const arr=[{
//     id:18,
//     player:"virat"
// },
//     {
//         id:17,
//     player:"Abd"
//     },
//     {
//         id:200,
//     player:"Chahal"
//     }
// ]
//   return (
//    <div>
//     {
//       arr.map(
//         (value)=>

        
//           <li key={value.id}>{value.player}, {value.id}</li>
      
        
//       )
//     }



    {/* <Orderlist/>
    <Greet/>
    <Buttonsin/>
    <Imagess/>
    <Formss/>
    <Bttns/>
    <Lt/>
    
    <Listcomponents/> */}
    {/* <Buttongo/>
    <Teams/> */}
   
   
    return (
         <div>
           <Iplv/>
             <One/> 

             <Heading/>
             <Cards/>

             <Cr/>
   </div>
  );
}

export default App;
