import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';

import BugCard from '../Bug Card/BugCard'

export default function ViewBugs() {
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);


    useEffect(() => {
        dispatch(getBugs());
    },[bugs.length < 1])
  return (

  <div className="bugs-container">
      {bugs.map((bug, key) => {
          <BugCard key={key} props={bug} />

      })}
  </div>
  )
}
