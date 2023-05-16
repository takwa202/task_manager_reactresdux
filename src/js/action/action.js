import { type } from "@testing-library/user-event/dist/type"
import { ADDTASK, EDITTASK, FILTERTASKES } from "../actionTypes/actionTypes"
import { DELETETASK } from './../actionTypes/actionTypes';

export const addtask = (newtask) => {
    return {
        type : ADDTASK,
        payload :newtask,

    }
 }
 export const deletetask = (task) => { 
    return {
        type: DELETETASK,
        payload : task,
    }
 }
 export const edittask = (edettask) => {
    return{
        type :EDITTASK,
        payload:edettask,
    } 

  }
  export const filtertask = (statues) => { 
      return {
          type:FILTERTASKES,
          payload:statues,
      }
   }
 