import React, { useState } from 'react';
import * as data from '../../data.js'

export const ModalCreate = ({isModalCreateOpen, setIsModalCreateOpen, idTask, loadTasks}) => {
  const [inputValue, setInputValue] = useState({});
  const handleChange = async () => {
    await data.addTask(inputValue)
    await loadTasks();
    setIsModalCreateOpen(false);
  };
  return (
    <div>
      {isModalCreateOpen && (
        <div className="modal">
          <h3>Create a new task</h3>
          <p>Give a name for the task</p>
          <input type='text' onChange={(e) =>{
            setInputValue({name: e.target.value})} 
          } />
          <p>Give description for the task</p>
          <input type='text' onChange={(e) =>{
            setInputValue({...inputValue, description: e.target.value})} 
          } />
          <button onClick={handleChange}>Create</button>
          <button onClick={() => setIsModalCreateOpen(false)}>Cancel</button>
          {/* <button onClick={() => console.log(inputValue)}>OK</button> */}
        </div>)}
    </div>);
}