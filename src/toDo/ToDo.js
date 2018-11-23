import React from 'react'

class ToDo extends React.Component {

    state = {
        tasks: [],
        filterText: '',
        chosenFilter: 'ALL',
        newTaskText: ''
    }
    createTask = (text) => (
        {
            taskText: '',
            isCompleted: false,
            key: Date.now() //good enough for app that does not use online database
        })

    addTask = () => this.setState({
        tasks: this.state.tasks.concat(
            this.createTask(this.state.newTaskText
            )),
            newTaskText: ""
    })

    deleteTask = (taskKey) => this.setState({
        tasks: this.state.tasks.filter(
            task => task.key !== taskKey
        )
    })

    completeTask = (taskKey) => this.setState({
        tasks: this.state.tasks.map(
            task => (
                (task.key === taskKey) ?
                    {
                        ...task,
                        isCompleted: true
                    }
                    :
                    task
            )
        )
    })

    onAllClickHandler = () => this.setState({ chosenFilter: 'ALL' })
    onCompletedClickHandler = () => this.setState({ chosenFilter: 'COMLETED' })
    onUnCompletedClickHandler = () => this.setState({ chosenFilter: 'UNCOMPLETED' })

    onFilterTextChangeHandler = (event) => { this.setState({ filterText: event.target.value }) }
    onNewTaskTextChangeHandler = (event) => { this.setState({ newTaskText: event.target.value }) }

    render() {
        return (
            <div>
                <input
                typ='text'
                value= {this.state.newTaskText}
                onChange= {this.onNewTaskTextChangeHandler}
                >
                </input>
                <button
                onClick= {this.addTask}
                >
                    Add Task
                </button>
            </div>
        )
    }
}

export default ToDo