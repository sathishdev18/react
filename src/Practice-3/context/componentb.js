
import React,{useContext} from "react"
import { Usercontext,ChannelContext } from "../../App"

function Componentb(){
const user=useContext(Usercontext)
const Channel=useContext(ChannelContext)

    return(
        <>
        {user}-{Channel}
        </>
    )
}
export default Componentb