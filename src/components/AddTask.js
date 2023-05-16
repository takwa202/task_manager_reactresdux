import React from 'react';
import {useState} from 'react';
import{ useDispatch} from  "react-redux";
import { addtask } from './../js/action/action';
const AddTask = () => {
  
  const [inputTask, setinputTask] = useState(
    {
     
      discription:'',
     
    }
)
const onchange = (e) => {
  setinputTask({...inputTask,[e.target.name]:e.target.value});
}
const dispatch = useDispatch()
const handelSubmit = (e) => { 
  e.preventDefault();
  const newtask = {...inputTask, id:Math.random(), isdone:false} ;
  dispatch(addtask(newtask));
}

  return (
    <div className='addtask'>
<input  type="text" placeholder='add a task' onChange={onchange} name='discription'/>
<button onClick={handelSubmit } className='myButton'> add task </button>


    </div>
  )
}

export default AddTask