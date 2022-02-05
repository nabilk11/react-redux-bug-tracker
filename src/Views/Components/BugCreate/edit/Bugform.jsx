import React from 'react';
import './bugForm.css';

export default function Bugform(props) {
  return ( 
  <div className="bug-create">
      <h1>{props.title}</h1>
      <form action="">
        <label htmlFor="">Name:</label>
        <input name="name" plasceholder="Bug Name" type="text" required/>
        <label htmlFor="">Details:</label>
        <textarea name="details" placeholder="Detailed description of the bug or issue"id="" cols="30" rows="10" required></textarea>
        <label htmlFor="">Steps:</label>
        <textarea name="steps" placeholder="Steps to reproduce the bug"id="" cols="30" rows="10" required></textarea>
        <label htmlFor="">Priority:</label>
        <select name="priority" id="" required>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
        </select>
        <label htmlFor="">Assigned</label>
        <select name="assigned" id="" >
            <option value="1">Nabil Khan</option>
        </select>
        <label htmlFor="">Application Version:</label>
        <input name="version" plasceholder="Application Version" type="text"/>
        <button type="submit">{props.title}</button>
      </form>

  </div>
  )
}
