import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
import './App.css';

function App() {
// getting state inside useSelector, destructor 

const {auth} = useSelector(state => state)


  return (
    <div className="App">
      
      {!auth.LoggedIn ? <Login /> : //if the user is not loggedIn then render the Login page, then once they login render the next page
      <h1>hello</h1> }
    </div>
  );
}

export default App;
