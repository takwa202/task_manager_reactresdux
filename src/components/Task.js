import React from 'react'
import EditTask from './EditTask'
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deletetask, edittask } from './../js/action/action';
import { FaTrashRestoreAlt} from "react-icons/fa";

const Task = ( {task}) => {
  const dispatch = useDispatch();
  const [inputTask, setinputTask] = useState(
    {
     id:task.id,
      isdone:task.isdone,
      discription:task.discription,
     
    }
)

 
  const  checkboxChange = (e) => { 
    
   const chekedd = e.target.checked;
    const newtask = {...inputTask, id:task.id, isdone:chekedd} ;
    dispatch(edittask(newtask));
  
   
}
const delite = (e) => {
  e.preventDefault();
  dispatch(deletetask(inputTask)) ;
}

   
 
  return (
    <div className='tasks'>
      <output className='input' > { task.discription }</output>
    <label className='tin text'> is the task done ?</label>
    <input type="checkbox"   onClick={checkboxChange}  defaultChecked = {inputTask.isdone} />   
    <FaTrashRestoreAlt  onClick={delite} className='tin'/>
    
    <EditTask id={task.id}  isdone={task.isdone}/>
 


    </div>
  )
}

export default Task