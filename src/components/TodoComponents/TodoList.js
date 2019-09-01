// your components will all go in this `component` directory.
// feel free to change this component.js into ToDoData.js
import React from 'react'

const ToDoData =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class ToDoList extends React.Component {

constructor() {
    super();
    this.state = {
      toDo: ToDoData
    };
  }

  render() {
    return (
      <>
        {this.state.toDo.map(todo => <h2>{todo.task}</h2>)}
      </>
    );
  }
}


export default ToDoList;