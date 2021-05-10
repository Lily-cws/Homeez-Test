import { Fragment } from 'react';
import './App.css';
import Input from './component/input';
import List from './component/list';
import PageNotFound from './component/404';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Fragment> 
      <Switch>
        <Route exact path="/" component={Input}/>
        <Route exact path="/all-list" component={List}/>
        <Route component={PageNotFound}/>
      </Switch>        
    </Fragment>  
  );
}

export default App;
