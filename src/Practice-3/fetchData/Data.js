import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [post, setpost] = useState({});
  const[id,setid]=useState(1)
  const[idbutton,setidbutton]=useState(1)

  const handleclick=()=>{
    setidbutton(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idbutton}`)
      .then((res) => {
        console.log(res);
        setpost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idbutton]);

  
  return (
    <>
    <input type="text" value={id} onChange={e => setid(e.target.value)}/>
     
     <button onClick={handleclick}>fetchdata</button>
     <h1>{post.title}</h1>
     <h6>{post.body}</h6>
      {/* <ul>
        {posts.map((pro) => {
          return (
            <React.Fragment key={pro.id}>
              <h6>{pro.id}</h6>
              <li>{pro.title}</li>

              <p>{pro.body}</p>
            </React.Fragment>
          );
        })}
      </ul> */}
    </>
  );
}
export default Data;
