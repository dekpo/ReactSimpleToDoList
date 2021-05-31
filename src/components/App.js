import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';

class App extends React.Component {
    render() {
      return (
        <section>
          <ToDoList />
          <AddTask />
          <NavBar />
        </section>
      )
    }
  }

  export default App