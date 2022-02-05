import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Views/Sidebar/Sidebar';
import Viewbugs from './Views/Pages/Viewbugs';

import './App.css';



function App() {
// getting state inside useSelector, destructor 

const { auth } = useSelector(state => state)


  return (
    
      <Router>
      {!auth.LoggedIn ? <Login /> :
      <>
      <Sidebar />
      <Viewbugs/>
      </>
      }
      </Router>
    
  );
}

export default App;
