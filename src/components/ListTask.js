import React from "react";
import { useSelector} from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const filter =useSelector (state => state.filterStatue);
    const tasklist = useSelector (state => state.list);
     //select the state from reducer
  const filtredToDoList = tasklist.filter ((el)=>{
    if(filter =='all' ){
      return el;
    } else if( filter =='done'){
      return el.isdone === true
    }else if(filter =='notdone'){
      return el.isdone == false
    }
  })

    
  return (
    <div className="div">
        {
            filtredToDoList.map((el,i)=> < Task task= {el} key={i} />)
        }


    </div>
  )
}

export default ListTask