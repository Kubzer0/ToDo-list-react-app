import React from 'react'

const Search = (props) => (<div>
    <input
        type='text'
        placeholder='filter tasks'
        value={props.filterText}
        onChange={props.onFilterTextChangeHandler}
    >
    </input>
    <button
        disabled={props.chosenFilter === 'ALL'}
        onClick={props.onAllClickHandler}
    >
        ALL
    </button>
    <button
        disabled={props.chosenFilter === 'COMPLETED'}
        onClick={props.onCompletedClickHandler}
    >
        COMPLETED
    </button>
    <button
        disabled={props.chosenFilter === 'UNCOMPLETED'}
        onClick={props.onUnCompletedClickHandler}
    >
        UNCOMPLETED
    </button>
</div>
)


export default Search