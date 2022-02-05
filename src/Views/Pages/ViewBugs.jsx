import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';

import Bugcard from '../Bug Card/Bugcard';

export default function Viewbugs() {
    const dispatch = useDispatch();
    const { bugs } = useSelector(state=>state);
    useEffect(() => {
        dispatch(getBugs())
    },[bugs.length <1])
  return (
  <div className="bugs-container">
      <h1>hello</h1>
      {bugs.map((bug, key) => (
          <Bugcard key={key} props={bug} />
      ))}
  </div>
  )
}
