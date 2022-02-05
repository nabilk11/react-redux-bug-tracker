import React from 'react';
import './bugCard.css';
import PriorityController from '../../Controllers/priorityController'
// using props for bug info
export default function Bugcard(props) {
const {name, priority, version} = props.bug;
const {level, color} = PriorityController(priority);
const Clicked = () => {
    props.Clicked(props.name);
}


  return (
  <div className="bug-card" onClick={Clicked} style={{color:color}}>
      <h2 className="name">{name}</h2>
      <h4 className="priority">{level}</h4>
      <h5 className="version">{version}</h5>
  </div>
  )
}
