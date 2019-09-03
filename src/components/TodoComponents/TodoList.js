// your components will all go in this `component` directory.
// feel free to change this component.js into ToDoData.js
import React from 'react'
import Todo from './Todo'

class ToDoList extends React.Component {

constructor(props) {
    super(props); //Difines this so we can use this.props
    // console.log(props)
  }

  render() {
    return (
      <>
        {this.props.propsPassedToList.map(toDo => <Todo key = {toDo.id} propsPassedToToDo={toDo}
        completeTask = {this.props.completeTask}
        />)}
      </>
    );
  }
}

export default ToDoList;