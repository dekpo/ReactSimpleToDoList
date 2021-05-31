import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';

class App extends React.Component {
    render() {
      return (
        <section>
          <ToDoList />
          <NavBar />
        </section>
      )
    }
  }

  export default App