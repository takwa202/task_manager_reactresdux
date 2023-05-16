import React from 'react';
import Modal from 'react-modal';
import {useState} from 'react';
import{ useDispatch} from  "react-redux";
import { edittask } from './../js/action/action';
import { FaEdit ,FaCheck,FaTimes} from "react-icons/fa";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
   
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
const EditTask = ( {id,isdone}) => {
 
    const dispatch = useDispatch()
    const [inputTask, setinputTask] = useState(
        {
         
          discription:'',
         
        }
    )
    
      let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color ='#f00';
        }
      
        function closeModal() {
          setIsOpen(false);
        }
       
       
         const onchange = (e) => {
            setinputTask({...inputTask,[e.target.name]:e.target.value});
          }
          const handelSubmit = (e) => {
            e.preventDefault();
            const newtask = {...inputTask, id:id, isdone:isdone} ;
            dispatch(edittask(newtask));
            closeModal() ;
           }
      
      return (
      
    <div  className='tin'>  
      
         <FaEdit  className='tin' onClick={openModal}/>
         
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
          <input   type="text" placeholder='add a task' onChange={onchange} name='discription'/>
        <FaCheck   onClick={handelSubmit}/>
         <FaTimes onClick={closeModal}/>
         
            
          </Modal>
        </div>
        )      
}

export default EditTask