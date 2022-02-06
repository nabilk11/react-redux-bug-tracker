import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../../Controllers/Redux/bugSlice';
import { useHistory } from 'react-router-dom';
import Card from '../../Components/Dashboard/Card';
import './dashboard.css'

export default function Dashboard() {
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs);
    const browserHistory = useHistory();
    let highCount = 0
    let midCount = 0
    let lowCount = 0
    if(bugs!=undefined) {
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function redirect() {
        browserHistory.push('/viewbugs')
    }

    function filterBugs(priority) {
        return bugs.filter((bug)=> {return bug.priority == priority})
    }
    useEffect(() => {
        dispatch(getBugs())
    },[bugs == undefined])
  return (
  <div className="bugs-container" id="dashboard-container">
      <h1>unbugify.
        <small>dashboard<br />Bug Count</small></h1>
<Card priority="1" count={highCount.length} clicked={redirect}/>
<Card priority="2" count={midCount.length}  clicked={redirect}/>
<Card priority="3" count={lowCount.length}  clicked={redirect}/>
  </div>
  )
}
