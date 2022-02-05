import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Views/Sidebar/Sidebar';
import Viewbugs from './Views/Pages/Viewbugs';
import CreateBug from './Views/Components/BugCreateEdit/Bugform'

import './App.css';



function App() {
// getting state inside useSelector, destructor 

const { auth } = useSelector(state => state)


  return (
    
      <Router>
      {!auth.LoggedIn ? <Login /> :
      <>
      <Sidebar />
      <Switch>
        <Route path="/viewbugs"><Viewbugs/></Route>
        <Router path="/create"><div className="bugs-container"><CreateBug title="Create Bug"/></div></Router>
      </Switch>
      
      </>
      }
      </Router>
    
  );
}

export default App;
