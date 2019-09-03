import React from 'react';
// import TodoList from 'TodoList';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm'

const toDoData =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super ();
    this.state = {
      toDos: toDoData,
      newToDo: ``
    };
  }

  addToDo = props => {
    this.setState({
      toDos: [...this.state.toDos, {
        task: props,
        id: Date.now(),
        completed: false
      }]
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.addToDo(this.state.toDoImput);
  }

  onChangeFunction = event => {
    // console.log(this.state)
    this.setState({ [event.target.name]: event.target.value });
  }


  completeTask = (imputId) => {
    // console.log(this.completeTask, imputId)
    this.setState({ toDos: 
      this.state.toDos.map(toDo => {
        if (imputId === toDo.id && toDo.completed === true ){
          // console.log("if", toDo.completed)
          return {...toDo, completed: false}
        } else if (imputId === toDo.id && toDo.completed === false ){
          // console.log("else ", toDo.completed)
          return {...toDo, completed: true}
        } else {
          // console.log("else ", toDo.completed)
          return toDo;
        }               
      })
    })
  }

  clearCompletedFunction = () => {
    this.setState({
      toDos: this.state.toDos.filter(todo => {
        if (todo.completed) {
          return false;
        } else {
          return true;
        }
      })
    });
  }

  render() {
    return (
      <>
        <h2>To Do:</h2>
        <ToDoList propsPassedToList={this.state.toDos}
        completeTask = {this.completeTask}/> 
        <ToDoForm addToDo = {this.addToDo} clearCompletedFunction = {this.clearCompletedFunction} onChangeFunction = {this.onChangeFunction} handleSubmit = {this.handleSubmit}/>
      </>
    );
  }
}

export default App;
