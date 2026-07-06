import React, { useState } from 'react';
import * as data from '../data.js'

export const ModalChange = ({isModalChangeOpen, setIsModalChangeOpen, idTask, loadTasks}) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = async () => {
    await data.changeTask(inputValue, idTask);
    await loadTasks();
    setIsModalChangeOpen(false);
  };
  return (
    <div>
      {isModalChangeOpen && (
        <div className="modal">
          <p>Enter a new name for the task</p>
          <input type='text' onChange={(e) =>{
            setInputValue(e.target.value)
          } 
          } />
          <button onClick={handleChange}>OK</button>
          <button onClick={() => setIsModalChangeOpen(false)}>Cancel</button>
        </div>)}
    </div>);
}