import React from "react";
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
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
                </Switch>
            </div>
            </BrowserRouter>
          
        )
    }
}

ReactDOM.render(
    <App/>,document.getElementById('app')
)