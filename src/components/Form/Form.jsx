import React, { Component } from "react";
import css from './Form.module.scss'

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
            <div className={css.container}>
                <form onSubmit={this.handleSubmitForm} className={css.form}>
                  <div>
                    <label htmlFor="task" className={css.label}>
                        <input type="text"
                            name="task" 
                            value={task}
                            onChange={this.handleChange} 
                            className={css.input}
                        />
                    </label>
                  </div>
                  <div>
                    <button type="submit" className={css.btnSubmit}>Add task</button>
                  </div>
                </form>
            </div>
        );
    }
}