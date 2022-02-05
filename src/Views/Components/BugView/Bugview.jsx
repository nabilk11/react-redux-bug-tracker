import React from 'react';
import ViewSection from "./component/BugviewSection";
import BugModel from "../../../Models/bugModel";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Redux/bugSlice";


import './bugView.css';


export default function Bugview(props) {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);
  return ( 
    <div className="bugview">
        <button className="close-button" onClick={props.clicked}>Close</button>
        <h1 className="title">{bug.name}</h1>
        <ViewSection title='Details' info={bug.details} />
        <ViewSection title='Steps' info={bug.steps} />
        <ViewSection title='Priority' info={bug.priority} />
        <ViewSection title='Creator' info={bug.details} />
        <ViewSection title='App Version' info={bug.version} />
        <ViewSection title='Time Created' info={bug.time} />
        <button className="complete-button" onClick={()=>{dispatch(markComplete())} }>Mark Complete</button>
    </div>
  )
}
