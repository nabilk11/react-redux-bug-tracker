import React, { useState } from 'react';
import ViewSection from "./component/BugviewSection";
import BugModel from "../../../Models/bugModel";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Redux/bugSlice";
import EditPanel from '../BugEditDelete/EditPanel';
import EditBug from '../BugCreateEdit/Bugform'

import './bugView.css';


export default function Bugview(props) {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);

    const [displayEdit, setDisplayEdit] = useState(false)
    function editClicked() {
setDisplayEdit(!displayEdit)
    }

    function deleteClicked() {

    }
  return ( 
    <>
    <div className="bugview">
        <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
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
    {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked}/>}
    </>
  )
}
