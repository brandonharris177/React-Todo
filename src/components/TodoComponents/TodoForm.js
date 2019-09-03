import React from 'react'

class TodoForm extends React.Component {
    constructor (props) {
        super(props);
    }

    // clearImput = event => {
    //     event.preventDefault();
    //     this.setState({ newToDo: `` })
    //   } //possibly could be used to clear imput feild but need to find out how to call it on submit

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    type = "text" 
                    name= "toDoImput" 
                    placeholder = "To Do:" 
                    onChange = {this.props.onChangeFunction} 
                    value = {this.props.toDoImput}  />
                <button type = "submit">Submit</button>
                <button onClick = {this.props.clearCompletedFunction}>Clear Completed</button>
                {/* <button onClick = {this.clearImput}>Clear Text</button> */}
            </form>
        )
    }
}

export default TodoForm