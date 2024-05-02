
const Iplv=()=>{
//     var images='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCBbERA4a_MGwzirmvc3YtjW9MXz-8AsufQ&usqp=CAU',
//     varimages='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPUjsYpJyDfUrDfMcHG_cEc0xghWivk1FQg&usqp=CAU'
//    let dimensions={
//         height:100,
//         width:100
//     }

    var headd = {

        color: 'red',
        fontSize:50,
        fontWeight:'400',
        backgroundColor: 'lightgray',
        textAlign:'center'
      
      };
     var para={
        color:'blue',
        fontSize:20,
        fontWeight:'normal',
        textAlign:'center'
      }
        
    const teams=[{
        
        teamname:'Royal Challengers Benguluru',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCBbERA4a_MGwzirmvc3YtjW9MXz-8AsufQ&usqp=CAU',
        
        highestscore:973,
        players:{
            names:['virat (Batsmen)','Abd (Batsmen)','rajat (Batsmen)','maxi (Allrounder)','Gayle (Allrounder)','jacks (batsmen)','Dk (Batsmen)','Faf (Batsmen)','Siraj (Baller)','Mahipal (Batsmen)','karn (Leg-Spinner)']
        }
        },

        {
        teamname:'Sun Riseres hyderabad',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsMamUwHbnz-8N3DEpGe3D4JI_wTV8nlEtQ&usqp=CAU',
        highestscore:589,
        players:{
            names:['Head (Batsmen)','klasan (Batsmen)','Makaram (Batsmen)','Shabaj(Allrounder)',' Abishek (Allrounder)','pat cuminnis (Bowler)','Nitish (Batsmen)','samad (Batsmen)','Bhuvi (Baller)','markande (Leg-Spinner)']
        }
        },

        {
            teamname:'RR',
            images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPUjsYpJyDfUrDfMcHG_cEc0xghWivk1FQg&usqp=CAU',
            highestscore:870,
            players:{
                names:['buttler (Batsmen)','Jaswal (Batsmen)','samson (Batsmen)','parag(Allrounder)',' Ashwin (Allrounder)','Boult (Bowler)','hetymer (Batsmen)','Hope (Batsmen)','buger (Baller)','Chahal (Leg-Spinner)']
            }
            }
         
    ]

    return (
<div>
        {
            teams.filter((val)=>{
                return  val.highestscore>=900
            }).map((each)=>{
                return(
                    <>
                    <h1 style={headd}>{each.teamname}</h1>
                    <img src={each.images} ></img>
                    <div>
                        {
                            each.players.names.map((player)=>{
                                return(
                                    <>
                                    <p style={para}>{player}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                    </>
                )
            })
        }

</div>


    //     // <>
    //     {/* {
    //      teams.filter((teamm)=>{
    //         return teamm.highestscore >=900
    //        )
    //      })   
    //     .map((element)=>{
    //         return(
    //             <>
    //             <h1>{element.teamname}</h1>
    //             <p>{element.players.names.map((value)=>{
    //                 return(
    //                     <>
    //                     <li>{value.map((mem)=>{
    //                         return(
    //                             <>
    //                             <p>{mem.names}</p>
    //                             </>
    //                         )
    //                     })}</li>
    //                     </>
    //                 )
    //             })}</p>
    //             </>
    //         )
    //     })
    // }
    //     </> */}
    )
}

export default Iplv;
