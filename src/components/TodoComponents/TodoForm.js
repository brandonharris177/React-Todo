import React from 'react'

class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newToDo: ``
        };
    }

    onChangeFunction = event => {
        // console.log(this.state)
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addToDo(this.state.toDoImput);
        this.setState({ toDoImput: ``}) //optional peice of code that clears the bar.
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type = "text" 
                    name= "toDoImput" 
                    placeholder = "ToDo:" 
                    onChange = {this.onChangeFunction} 
                    value = {this.state.toDoImput}  />
                <button type = "submit">Submit</button>
                <button onClick = {this.props.clearCompletedFunction}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm