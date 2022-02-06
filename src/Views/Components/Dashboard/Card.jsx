import React from 'react';
import './card.css';
import PriorityController from '../../../Controllers/priorityController';

export default function Card(props) {
    const {level, color} = PriorityController(props.priority);
  return (
  <div className="dashboard-card" style={{color: color}}>
      <h2>Total: {level}</h2>
      <p>{props.count}</p>

  </div>
  )
}
