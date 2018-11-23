import React from 'react'

const completedStyle ={
    textDecoration: 'line-through'
}

const Task = (props) => (
    <div>
        <div
        onClick = {() => props.completeTask(props.task.key)}
        style ={props.task.isCompleted ? completedStyle : {}}
        >
        {props.task.taskText}
        </div>
        <button
        onClick = {()=>props.deleteTask(props.task.key)}
        >
        Delete
        </button>
    </div>
)

export default Task