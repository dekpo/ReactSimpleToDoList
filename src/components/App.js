import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import data from '../data';

class App extends React.Component {

  render() {
    return (
      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/add-task" component={AddTask} />
            <Route path="/:filter?" render={ (props) => <ToDoList {...props} tasks={data} /> } />
          </Switch>
          <NavBar />
        </BrowserRouter>
      </section>
    )
  }
}

export default App