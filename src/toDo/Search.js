import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const style = {
    button: {
        margin: 12
    }
}

const Search = (props) => (<div>
    <TextField
        type='text'
        placeholder='filter tasks'
        value={props.filterText}
        onChange={props.onFilterTextChangeHandler}
    />
    
    <RaisedButton
        disabled={props.chosenFilter === 'ALL'}
        onClick={props.onAllClickHandler}
        label='ALL'
        style= {style.button}
    />
    <RaisedButton
        disabled={props.chosenFilter === 'COMPLETED'}
        onClick={props.onCompletedClickHandler}
        label="COMPLETED"
        style= {style.button}
    />

    <RaisedButton
        disabled={props.chosenFilter === 'UNCOMPLETED'}
        onClick={props.onUnCompletedClickHandler}
        label='UNCOMPLETED'
        style= {style.button}
    />
</div>
)


export default Search