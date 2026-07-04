import * as data from '../data.js'
import { formattedDate } from './formattedDate.js';
import { Task } from './Task';
import "./style.css"
import { useState, useEffect } from 'react';


const tasks = await data.getTasks();

export const TasksList = () =>{
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const tasksData = await data.getTasks();
        setTasks(tasksData);
    };
    return(
        <div className="tasks__list">
            {tasks.map(item => !item.finished? <Task key={item.id} created_at={formattedDate(item.created_at)} name={item.name}/> : null
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