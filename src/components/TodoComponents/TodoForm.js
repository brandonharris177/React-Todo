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
        this.setState({ newToDo: ``})
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
            </form>
        )
    }
}

export default TodoForm