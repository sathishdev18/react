// const Ipl=()=>{
//     const obj=[{
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
// ]}
// export default Arr;



    const Ipl=()=>{
        const obj=[{
        id:18,
        player:"virat"
    },
        {
            id:17,
        player:"Abd"
        },
        {
            id:200,
        player:"Chahal"
        },
        {
            id:333,
        player:"chris"
        },
        {
            id:33,
        player:"rajat"
        }
    ]
    const iplteams=["rcb","Gt","Srh","Lsg","csk",'Mi','Rr','pbks','kkr','Dc']

    return(
        <>
        {
            obj.map((element,index)=>{
                return(
                    <>
                    <h1>{index+1}{element.player} ,{element.id}</h1>
                    </>
                )
            })
        }
        </>
    )
    }
export default Ipl;