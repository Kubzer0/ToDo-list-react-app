import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const style = {
    button: {
        margin: 12
    }
}

const AddTask = (props) => (
    <div>
        <TextField
            type='text'
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
        />
        
        <RaisedButton
            onClick={props.addTask}
            label = 'Add Task'
            style= {style.button}
        />
            

    </div>
)


export default AddTask