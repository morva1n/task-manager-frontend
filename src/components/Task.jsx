import './style.css'

export const Task = ({created_at, name}) =>{
    return(
        <div className="task">
            <p>{name}</p>
            <span>{created_at}</span>
        </div>
    )
}