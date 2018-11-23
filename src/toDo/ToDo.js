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
            ))
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

    onFilterTextChangeHandler = (value) => { this.setState({filterText: value}) }
    onNewTaskTextChangeHandler = (value) => { this.setState({newTaskText: value}) }

    render() {
        return (
            <div>
                ToDo
            </div>
        )
    }
}

export default ToDo