import React, { Component } from 'react';

import '../styles/main.scss';
import Header from './Header';
import User from './User';
import Youtube from './Youtube';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

export default class App extends Component{
    constructor(){
        super(),
        this.state={
            name:"Ozil"
        };
    }

    onChangeName(newName){
        this.setState({
            name: newName
        });
    }

    render() {
        return(
        // <div>
        //     <h2>My React App</h2>
        //     <div>
        //         <Header name={this.state.name} initialAge={29} changeName={this.onChangeName.bind(this)}
        //         >
              
        //           <User />
        //         </Header>
                <Router>
                  <div>
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
                       </ul>
                    </nav>   
                        
                        <Route exact path={'/header'} render={(props) => <Header {...props} name={this.state.name} initialAge={29} changeName={this.onChangeName.bind(this)} >
                        
                        </Header>}>
                       
                              
                        </Route>
                        <Route path={'/user'} component={User}></Route>
                        <Route path={'/youtubeApi'} component={Youtube}></Route>
                        
                        
                        
                   </div>
                </Router>
                 
                
        //     </div>
        // </div>
        );
            
    }
}

// export default App;