import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const completedStyle ={
    textDecoration: 'line-through',
}
const style = {
    button: {
        margin: 12
    }
}

const Task = (props) => (
    <div>
        <div
        onClick = {() => props.completeTask(props.task.key)}
        style ={props.task.isCompleted ? completedStyle : {}}
        >
        {props.task.taskText}
        </div>
        <RaisedButton
        onClick = {()=>props.deleteTask(props.task.key)}
        label= "Delete"
        style = {style.button}
        primary = {true}
        />
        
    </div>
)

export default Task