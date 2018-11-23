import React from 'react'
import AddTask from './AddTask';

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
        return (<div>
           <AddTask 
           newTaskText = {this.state.newTaskText}
           onNewTaskTextChangeHandler= {this.onNewTaskTextChangeHandler}
           addTask= {this.addTask}
           />
           </div>
        )
    }
}

export default ToDo