import React, { useState } from 'react';
import BugModel from '../../../Models/bugModel';
import './bugForm.css';

export default function Bugform(props) {
  const [bugObject, setBugObject] = useState(new BugModel(props.bug))

  function inputChanged(e) {
    setBugObject({
      ...bugObject,
      [e.target.name]:e.target.value,
    })
  }
  return ( 
  <div className="bug-create">
    {props.title == "Edit Bug" && <button className="close-button" onClick={props.close}>Close</button>}
      <h1>{props.title}</h1>
      <form action="">
        <label htmlFor="">Name:</label>
        <input name="name" placeholder="Bug Name" type="text" required onChange={inputChanged} value={bugObject.name}/>
        <label htmlFor="">Details:</label>
        <textarea name="details" placeholder="Detailed description of the bug or issue"id="" cols="25" rows="5" required
        onChange={inputChanged} value={bugObject.details}></textarea>
        <label htmlFor="">Steps:</label>
        <textarea name="steps" placeholder="Steps to reproduce the bug"id="" cols="25" rows="5" required
        onChange={inputChanged} value={bugObject.steps}></textarea>
        <label htmlFor="">Priority:</label>
        <select name="priority" id="" required onChange={inputChanged} value={bugObject.priority}>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
        </select>
        <label htmlFor="">Assigned</label>
        <select name="assigned" id="" onChange={inputChanged} value={bugObject.assigned}>
            <option value="1">Nabil Khan</option>
        </select>
        <label htmlFor="">App Version:</label>
        <input name="version" placeholder="Application Version" type="text" onChange={inputChanged} value={bugObject.version}/>
        <button type="submit">{props.title}</button>
      </form>

  </div>
  )
}
