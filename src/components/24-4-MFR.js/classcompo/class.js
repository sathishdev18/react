import { Component } from "react";

class One extends Component {
  render() {
    var headd = {

      color: 'white',
      fontSize:50,
      fontWeight:'400',
      backgroundColor: 'black',
      textAlign:'center'
    
    };

    var para={
      color:'blue',
      fontSize:20,
      fontWeight:'normal',
      textAlign:'center'
    }

    var para1={
      color:'red',
      fontSize:40,
      fontWeight:'normal',
      textAlign:'center'
    }
    
    return (
      <>
        <h1 style={headd}>Hello</h1>
        <p>lorem</p>
        <form>
            <label for="go">enter name</label><br/><br/>
            <input type="text" placeholder="name" id="go"></input>
            <input type="submit"></input>
        </form>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ufETgksFqGKTBOkwy8bhdQslb1kUqNJ7w&usqp=CAU"></img>
        <table>
            <th style={para1}>Rcb</th>
            <tr style={para}>
                <td>virat</td>
                <td>Abd</td>
                <td>maxi</td>
                <td>jacks</td>

            </tr>
            <tr style={para}>
                <td>Rajat</td>
                <td>Chris</td>
                <td>green</td>
                <td>siraj</td>
            </tr>
        </table>
      </>
    );
  }
}
export default One;
