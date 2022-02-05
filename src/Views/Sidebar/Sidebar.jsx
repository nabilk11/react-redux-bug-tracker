import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controllers/Redux/authSlice';

import './sidebar.css'

export default function Sidebar() {

    const dispatch = useDispatch();
    const {auth} = useSelector(state => state)

    const SignOut = () => {
        dispatch(signOut())
    }
  return (
  <div className="sidebar">
      <Link className="nav-link" to="/"><h1 className="brand">unbugify.</h1></Link>
      <ul>
          <li><Link to="/" className="nav-link">Dashboard</Link></li>
          <li><Link to="/viewBugs" className="nav-link">View Bugs</Link></li>
          
          {auth.admin && <li><Link to="/create" className="nav-link">Create New Bug</Link></li>} 
      </ul>
      <button className="nav-button logout" onClick={SignOut}>Logout</button>


  </div>
  )
}
