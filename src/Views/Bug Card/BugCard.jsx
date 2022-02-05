import React from 'react';
import './bugCard.css';

// using props for bug info
export default function Bugcard(props) {

const Clicked = () => {
    props.Clicked(props.name);
}


  return (
  <div className="bug-card" onClick={Clicked}>
      <h2 className="name">{props.name}</h2>
      <h4 className="priority">{props.priority}</h4>
      <h5 className="version">{props.version}</h5>
  </div>
  )
}
