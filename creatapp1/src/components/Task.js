import React from "react";

import {FaTimesCircle} from 'react-icons/fa';

const Task = ({tasklist, onDelete}) => {
  return (
    <div className='task'>
        <h3>{tasklist.text} <FaTimesCircle style={{color:'red', cursor:'pointer'}} onClick={onDelete} /></h3>
        <p className="task__para">{tasklist.day}</p>
    </div>
  )
}

export default Task