import React, { useState } from 'react';
import * as data from '../data.js'
const value = document.querySelector('.value')
console.log(value)

export const ModalChange = ({isModalChangeOpen, setIsModalChangeOpen, idTask}) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = () => {
    data.changeTask(inputValue, idTask);
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