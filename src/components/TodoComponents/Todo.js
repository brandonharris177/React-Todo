import React from 'react'
import './Todo.css';

class ToDo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.propsPassedToToDo.completed = 'true') {
            return (
                <>
                    <h2 className = 'completed'>{this.props.propsPassedToToDo.task}</h2>
                </>
            );
        } else {
            return (
                <>
                    <h2>{this.props.propsPassedToToDo.task}</h2>
                </>
            )
        }
    }
}

export default ToDo;