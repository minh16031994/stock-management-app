import React from "react";
import ReactDOM from 'react-dom';
import Navbar from './components/feature/NavbarHomepage';
import Home from './components/pages/Home';
import SignUpModal from './components/feature/SignupModal';
import LoginModal from './components/feature/LoginModal';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends React.Component{
    render()
    {
        return(
            <BrowserRouter>
              <div>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Signup' component={SignUpModal}/>
                    <Route path='/Login' component={LoginModal}/>
                </Switch>
            </div>
            </BrowserRouter>
          
        )
    }
}

ReactDOM.render(
    <App/>,document.getElementById('app')
)