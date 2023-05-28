import React, { Component } from "react";

export class Form extends Component {
    state = {
        task : '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value });
    }

    handleSubmitForm = (e) => {
        e.preventDefault()
        
        this.props.onSubmit({...this.state});

        this.reset();
    }

    reset = () => {
        this.setState({ task : ''});
    }
    
    render () {
        const { task } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                  <div>
                    <label htmlFor="task">
                        <input type="text" name="task" value={task} onChange={this.handleChange}/>
                    </label>
                  </div>
                  <div>
                    <button type="submit">Add task</button>
                  </div>
                </form>
            </div>
        );
    }
}