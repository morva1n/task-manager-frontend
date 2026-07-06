import './style.css'
import * as data from '../data.js'
import { formattedDate } from '../formattedDate.js';



export const Task = ({tasks, setIsModalDeleteOpen, setIsModalChangeOpen, setIdTask, loadTasks}) =>{
    return(
        <div className="task">
            <h4>{tasks.name}</h4>
            <p>{tasks.description}</p>
            <span>{formattedDate(tasks.created_at)}</span>
            <button onClick={() =>{
                setIdTask(tasks.id)
                setIsModalChangeOpen(true)
                
            } }>change</button>
            <button onClick={() =>{
                setIdTask(tasks.id)
                setIsModalDeleteOpen(true)
            } }>delete</button>
        </div>
    )
}