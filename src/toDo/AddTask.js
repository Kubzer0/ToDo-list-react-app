import React from 'react'

const AddTask = (props) => (
    <div>
        <input
            type='text'
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
        >
        </input>
        <button
            onClick={props.addTask}
        >
            Add Task
</button>
    </div>
)


export default AddTask