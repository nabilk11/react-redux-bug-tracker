import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../../Controllers/Redux/bugSlice';
import Card from '../../Components/Dashboard/Card';

export default function Dashboard() {
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs);
    let highCount = 0
    let midCount = 0
    let lowCount = 0
    if(bugs!=undefined) {
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function filterBugs(priority) {
        return bugs.filter((bug)=> {return bug.priority == priority})
    }
    useEffect(() => {
        dispatch(getBugs())
    },[bugs == undefined])
  return (
  <div className="bugs-container">
      <h1>unbugify.
        <small>dashboard<br />Bug Count</small></h1>
<Card priority="1" count={highCount.length} />
<Card priority="2" count={midCount.length}  />
<Card priority="3" count={lowCount.length}  />
  </div>
  )
}
