import Listitems from "./listitems"

const Listcomponents=()=>{
    let iplTeams=["Rcb","Srh","Gt"]
    let leagueIndian="Indian Premiem League"
    let iplImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1SwbqrnC2yAJzABZpXEgeiEMEtK-oTiwxQ&usqp=CAU'
    let dimensions={
        Width:200,
        height:200
    }
    return (
        <div>
        <h1>{leagueIndian}</h1>
        <img src={iplImage} height={dimensions.height} width={dimensions.Width}/>
        <button onClick={()=>{}}>Hey</button>
        <ul>
        <Listitems/>
        </ul>
        </div>
    )
}
export default Listcomponents