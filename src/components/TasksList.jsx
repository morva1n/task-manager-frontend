import * as data from '../data.js'
import { formattedDate } from './formattedDate.js';
import { Task } from './Task';
import "./style.css"
import { useState, useEffect } from 'react';
import { ModalDelete } from './ModalDelete.jsx';
import { ModalChange } from './ModalChange.jsx';


const tasks = await data.getTasks();

export const TasksList = () =>{
    const [tasks, setTasks] = useState([]);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalChangeOpen, setIsModalChangeOpen] = useState(false);
    const [idTask, setIdTask] = useState(0);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const tasksData = await data.getTasks();
        setTasks(tasksData);
    };
    return(
        <div className="tasks__list">
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen} setIsModalDeleteOpen={setIsModalDeleteOpen} idTask={idTask} />
            <ModalChange isModalChangeOpen={isModalChangeOpen} setIsModalChangeOpen={setIsModalChangeOpen} idTask={idTask} />
            
            {tasks.map(item => !item.finished? <Task key={item.id} tasks={item} created_at={formattedDate(item.created_at)} setIsModalDeleteOpen={setIsModalDeleteOpen} setIsModalChangeOpen={setIsModalChangeOpen} setIdTask={setIdTask} /> :null
            )}
            <button onClick={async () =>{
                await data.addTask();
                loadTasks();
            }}>+</button>
            <button onClick={async () =>{
                await data.changeTask();
                loadTasks();
            }}>change</button>
            <button onClick={async () =>{
                await data.deleteTask();
                loadTasks();
            }}>-</button>
        </div>
    )
}