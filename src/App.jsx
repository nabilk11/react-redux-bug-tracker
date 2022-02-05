import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Sidebar from './Views/Sidebar/Sidebar';


function App() {
// getting state inside useSelector, destructor 

const {auth} = useSelector(state => state)


  return (
    <div className="App">
      <Router>
      {!auth.LoggedIn ? <Login /> : //if the user is not loggedIn then render the Login page, then once they login render the next page
      <Sidebar />
      }
      </Router>
    </div>
  );
}

export default App;
