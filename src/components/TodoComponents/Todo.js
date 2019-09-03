import React from 'react'
import './Todo.css';

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
    }

    render() {
        if (this.props.propsPassedToToDo.completed === true) {
            return (
                <>
                    <h2 
                    onClick = {() => this.props.completeTask(this.props.propsPassedToToDo.id)}
                    className = 'completed'>{this.props.propsPassedToToDo.task}</h2>
                </>
            );
        } else {
            return (
                <>
                    <h2
                    onClick = {() => this.props.completeTask(this.props.propsPassedToToDo.id)}
                    >{this.props.propsPassedToToDo.task}</h2>
                </>
            )
        }
    }
}

export default ToDo;