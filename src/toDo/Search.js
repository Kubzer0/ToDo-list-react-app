import React from 'react'

const Search = (props) => (<div>
    <input
        type='text'
        value={props.filterText}
        onChange={props.onFilterTextChangeHandler}
    >
    </input>
    <button
        onClick={props.onAllClickHandler}
    >
        ALL
    </button>
    <button
        onClick={props.onCompletedClickHandler}
    >
        COMPLETED
    </button>
    <button
        onClick={props.onUnCompletedClickHandler}
    >
        UNCOMPLETED
    </button>
</div>
)


export default Search