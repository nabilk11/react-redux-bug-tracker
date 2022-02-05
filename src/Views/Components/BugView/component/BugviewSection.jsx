import React from 'react';
import './bugViewSection.css'

export default function BugviewSection(props) {
  return ( 
    <div className="view-section">
        <h1 className="title">{props.title}</h1>
        <p className="info">{props.info}</p>
    </div>
  )
}
