import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import data from '../data';
import uniqid from 'uniqid';

class App extends React.Component {

  state = {
    tasks: data
  }

  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find( task => task.id === taskId )
    taskToUpdate.completed = !taskToUpdate.completed

    this.setState(prevState => (
      prevState.tasks.map(task => {
        return task.id === taskId ? taskToUpdate : task
      })
    ))
  }

  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqid.process(),
      name: newTaskName,
      completed: false
    }
    console.log(newTask)

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }))
  }

  onDeleteCompleted = () => {
    this.setState(prevState => {
      let newState = prevState.tasks.filter(task => !task.completed )
      return {
        tasks: newState
      }
    })
  }

  render() {
    return (
      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/add-task" render={ (props) => <AddTask {...props} onAddTask={this.onAddTask} /> } />
            <Route path="/:filter?" render={ (props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} /> } />
          </Switch>
          <NavBar onDeleteCompleted={this.onDeleteCompleted} />
        </BrowserRouter>
      </section>
    )
  }
}

export default App