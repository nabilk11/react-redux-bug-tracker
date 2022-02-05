import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';

import './login.css';

export default function Login() {
    // create dispatch from useDispatch to access the Dispatch function from Redux
    const dispatch = useDispatch();

    // create state for form input login
    const [formInput, setFormInput] = useState({
        name:"",
        password:"",

    })
    // function to handle input change - this is setting the local state
const inputChanged = (e) => {
    setFormInput({
        ...formInput,
        // need to set a key
        [e.target.name]: e.target.value,

    })
}
// sending the state to redux using dispatch
const submit = (e) => {
    dispatch(signIn(formInput));
    e.preventDefault(); //prevents page from reloading after submit
}

  return (
  <div className="login">
      <form action="" className="login-panel">
        <h1>Login to unbugify.</h1>
        <input type="text" name="name" placeholder="name" onChange={inputChanged} value={formInput.name} />
        <input type="password" name="password" placeholder="********" onChange={inputChanged} value={formInput.password} />
        <button type="submit" onClick={submit}>Login</button>
      </form>
      <div className="loginImg">
          <p></p>
          <p></p>
          <p></p><p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
      </div>

  </div>
  )
}
