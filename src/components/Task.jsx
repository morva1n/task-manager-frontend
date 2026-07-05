import './style.css'
import * as data from '../data.js'



export const Task = ({tasks, created_at, setIsModalDeleteOpen, setIsModalChangeOpen, setIdTask}) =>{
    return(
        <div className="task">
            <p>{tasks.name}</p>
            <span>{created_at}</span>
            <button onClick={() =>{
                setIsModalChangeOpen(true)
                setIdTask(tasks.id)
            } }>change</button>
            <button onClick={() =>{
                setIsModalDeleteOpen(true)
                setIdTask(tasks.id)
            } }>delete</button>
        </div>
    )
}