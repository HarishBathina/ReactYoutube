import React, { component } from "react";
import axios from "axios";

export default class User extends React.Component{
   
    constructor(props){
        super();
        var info;
        this.state={
            FirstName:"Rambo",
            Salary:0,
            results:[]
        };
    }


    handleSubmit(event){
        event.preventDefault();
        const data = this.state;
        console.log(data);
        axios.post(`http://localhost:63961/api/employees`,data).then(res =>{
            console.log(res.data);
        });

    }

    handleChange(event){
        this.setState({
           [event.target.name]:event.target.value,
           
        });
        //console.log([event.target.name])
    }

    getData(){
        
        axios.get(`http://localhost:63961/api/employees`).then(res =>{
           
          console.log(res.data);
          this.setState({
            results:res.data,
          });

       });
    }

    render(){
        //const {salary} = this.state
        return(
            <div>
                <h3>Hiii, You are in User component.</h3>
                {/* <p>fullname is{salary}</p> */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                   <input type="text" name="FirstName" placeholder="Full Name" onChange={this.handleChange.bind(this)} />
                   <br/>
                   <input type="text" name="Salary" placeholder = "Salary" onChange={this.handleChange.bind(this)} />
                   <button >Submit</button>
                   <button onClick={this.getData.bind(this)}>Get Data</button>
                   <br/>
                  
                </form>
                <ul>{this.state.results.map(result=><li key={result.ID}>{result.FirstName}</li>)}</ul>

            </div> 
        );
    }
}