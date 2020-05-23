import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import {Global,Navbar,India,About,Help} from './components'

class App extends Component {
 
   
   
    render() {
        return (
        <React.Fragment>
          <Navbar/>
       <Switch>
          <Route path="/" exact>
          <Global/>
          </Route>
          <Route path="/india" exact>
          <India/>
          </Route>
          <Route path="/about" exact>
          <About/>
          </Route>
          <Route path="/help" exact>
          <Help/>
          </Route>
        </Switch>
        </React.Fragment>
          );
    }
}
 
export default App;