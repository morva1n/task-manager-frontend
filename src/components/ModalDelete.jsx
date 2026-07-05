import React, { useState } from 'react';
import * as data from '../data.js'

export const ModalDelete = ({isModalDeleteOpen, setIsModalDeleteOpen, idTask}) => {
  const handleDelete = () => {
    data.deleteTask(idTask);
    setIsModalDeleteOpen(false);
  };

  return (
    <div>
      {isModalDeleteOpen && (
        <div className="modal">
          <p>Are you sure you want to delete this task?</p>
          <button onClick={handleDelete}>Yes, delete</button>
          <button onClick={() => setIsModalDeleteOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}