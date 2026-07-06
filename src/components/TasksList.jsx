import * as data from '../data.js'
import { Task } from './Task';
import "./style.css"
import { useState, useEffect } from 'react';
import { ModalDelete } from './Modals/ModalDelete.jsx';
import { ModalChange } from './Modals/ModalChange.jsx';
import { ModalCreate } from './Modals/ModalCreate.jsx';


const tasks = await data.getTasks();

export const TasksList = () =>{
    const [tasks, setTasks] = useState([]);

    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
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
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen} setIsModalDeleteOpen={setIsModalDeleteOpen} idTask={idTask} loadTasks={loadTasks} />
            <ModalChange isModalChangeOpen={isModalChangeOpen} setIsModalChangeOpen={setIsModalChangeOpen} idTask={idTask} loadTasks={loadTasks} />
            <ModalCreate isModalCreateOpen={isModalCreateOpen} setIsModalCreateOpen={setIsModalCreateOpen} idTask={idTask} loadTasks={loadTasks} />
            
            {tasks.map(item => !item.finished? <Task key={item.id} tasks={item} setIsModalDeleteOpen={setIsModalDeleteOpen} setIsModalChangeOpen={setIsModalChangeOpen} setIdTask={setIdTask}/> :null
            )}
            {/* <button onClick={async () =>{
                await data.addTask();
                loadTasks();
            }}>+</button> */}
            <button onClick={() =>{
                setIsModalCreateOpen(true)
            } }>+</button>
        </div>
    )
}