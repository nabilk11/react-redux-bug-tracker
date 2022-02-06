import React from 'react';
import './card.css';
import PriorityController from '../../../Controllers/priorityController';

export default function Card(props) {
    const {level, color} = PriorityController(props.priority);
  return (
  <div className="dashboard-card" style={{color: color}}>
      <h3>{level} Priority Bugs</h3>
      <p>{props.count}</p>

  </div>
  )
}
