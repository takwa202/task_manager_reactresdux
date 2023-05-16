import React from 'react'
import {useState} from 'react';

import{ useDispatch,useSelector} from  "react-redux";
import { filtertask } from '../js/action/action';

const Filter = () => {
  const dispatch = useDispatch();
  const initialvalue =useSelector (state => state.filterStatue);
  const [filterStatus,setfilterStatus]=useState(initialvalue);
  console.log(filterStatus)
   const  updateFilter= (e) => {
    e.preventDefault();
     dispatch(filtertask(e.target.value) )
     
   }

  
   return (
    <div className='fiter' >
       <select id='status' value={initialvalue} onChange={updateFilter} >
       <option value = 'all'>all</option>
         <option value = 'done'>done</option>
         <option  value = 'notdone'>notdone</option>

       </select>
    </div>
  )
}

export default Filter