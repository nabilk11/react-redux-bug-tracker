import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import Bugcard from '../Components/BugCard/Bugcard';
import BugView from '../Components/BugView/Bugview';

export default function Viewbugs() {
    // state for viewing bugs
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        name: "",
        isDisplayed: false,
    })
    const dispatch = useDispatch();
    const { bugs } = useSelector(state=>state);
    useEffect(() => {
        dispatch(getBugs())
    },[bugs.length <1])

    function BugClicked(name) {
        SET_DISPLAY_BUG({
            // changing the state to the opposite displaying and notdisplaying
            isDisplayed:!DISPLAY_BUG.isDisplayed,
            name: name,

        })

    }
  return (
  <div className="bugs-container">
      {bugs.map((bug, key) => (
          <Bugcard key={key} bug={bug} clicked={BugClicked}/>
      ))}
      {DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={bugs.filter((bug) =>  bug.name == DISPLAY_BUG.name)[0]}  />}
  </div>
  )
}
