import React, { Component } from 'react';

import '../styles/main.scss';
import Header from './Header';
import User from './User';
import New from './New';
import Youtube from './Youtube';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
    apiKey:"AIzaSyCFM3cGx0xKSlCJ31M6vYLJ7LrJlKAu4uQ",
    authDomain:"react-firebase-b05cd.firebaseapp.com"

})


class App extends Component{
    constructor(){
        super(),
        this.state={
            name:"Ozil",
            isSignedIn:false
        };
    }

    uiConfig ={
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess: () => false
        }
    }
    
    componentDidMount(){
        
         
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn:!!user});
            console.log(user)
        })
    }

    onChangeName(newName){
        this.setState({
            name: newName
        });
    }

    render() {
        return(
             <div>
             {this.state.isSignedIn ? (<Router>
                  <div>
                  <span><h4>Welcome {firebase.auth().currentUser.displayName}</h4></span>
                  <nav className="navbar navbar-expand-sm bg-dark">

                  
                  <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                               <Link className="nav-link" to="/user">UserDetails</Link>
                               
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" to="/header">Events</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" to="/youtubeApi">Youtube</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" to="/new">New</Link>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link" onClick={()=>firebase.auth().signOut()}>Sign Out</button> 
                        </li>
                        
                       </ul>
                       
                      
                    </nav>   
                       
                       
                        
                        <Route exact path={'/header'} render={(props) => <Header {...props} name={this.state.name} initialAge={29} changeName={this.onChangeName.bind(this)} >
                        
                        </Header>}>
                       
                              
                        </Route>
                        <Route path={'/user'} component={User}></Route>
                        <Route path={'/youtubeApi'} component={Youtube}></Route>
                        <Route path={'/new'} component={New}></Route>
                        
                        
                         
                   </div>
                   
                </Router>
                ):(<StyledFirebaseAuth 
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()} />)}
                
               

                 
                
            </div>
        // </div>
        );
            
    }
}

export default App;