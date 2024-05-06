import { Component } from "react";

class Todo extends Component{
    state={
        todo:[ 'Virat','Abd','Dk' ]
    }
    Addtodo=()=>{

    let newstate=[...this.state.todo,"Chris"]
        this.setState({
            todo:newstate
        })
    }
    deleteall=()=>{
        let state2=[]
        this.setState({
            todo:state2
        })
    }
    seperateDeleteTodo=(index)=>{
        let separr=this.state.todo.filter((item,inn)=>inn!==index)
        this.setState({
            todo:separr
        })
    }

    changeTodo=(index)=>{
        let changeArr=this.state.todo.map((eachitem,i)=>{
            if(i===index){
                return "Kohli"
            }
            else{
                return eachitem
            }
        })

        this.setState({
            todo:changeArr
        })
    }

    render(){
        return(
           <div>
            <> <h1>Todo List</h1>
            <button onClick={this.Addtodo}>Add Todo</button>
            <button onClick={this.deleteall}>DeleteAllTodo</button>
            {
                this.state.todo.map((val,index)=>{
                    return(
                       
                        <div key={index}>
                             
                        <h4>{index+1} {val}</h4>
                        <button onClick={()=>this.seperateDeleteTodo(index)}>Clear todo</button>
                        <button onClick={()=>this.changeTodo(index)}>changetodo</button>
                        </div>
                    )
                })
            }
            </>
       </div> )
    }
}
export default Todo