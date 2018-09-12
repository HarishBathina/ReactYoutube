import React, {Component} from 'react';
//import ReactDom from 'react-dom';

//import '../styles/main.scss';
//import PropTypes from 'prop-types';
import Contact from './Contact';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super();
        this.state={
            age: props.initialAge,
            name: props.name,
           // value:""
            
        };
        this.handleChange = this.handleChange.bind(this);
    }
    onMakeOlder(){
       this.setState({
           age: this.state.age + 3
       });
    }
    onMakeYounger(){
        this.setState({
            age: this.state.age - 3
        });
     }

    Change(title){
        this.setState({
            name:title
        });
    }

    handleChange (event) {
        
           
        //const title = event.target.value;
        //console.log(title);
        this.setState({
            //name:title,
            name:event.target.value
        });
       //this.props.changeName(title); 
       //this.Change(title);     
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    render(){
        return(
            <div>
                <h4>In a new Component</h4>
                <p>Your name is {'Mesut'+ ' '+this.state.name}, your age is {this.state.age}</p>
                <p>Your name is {'Mesut'+ ' '+this.props.name}, your age is {this.state.age}</p>
                
                
                 
                 <button onClick={this.onMakeOlder.bind(this)}>Make me older</button>
                 <button onClick={this.onMakeYounger.bind(this)}>Make me younger</button>
                 <input type="text"  value={this.state.name} onChange={this.handleChange} />
                 <div>{this.props.children}</div>
                 <Router>
                     <div>
                         <li>
                             <Link to="/header/contact">Contact-us</Link>
                         </li>
                
                         <Route exact path={'/header/contact'} component={Contact}/>
                     </div>
                </Router>


             
            </div>
        );
        
    }
}

// Header.propTypes={
//    // children: PropTypes.element.isRequired
//    name:React.PropTypes.string
// }