import React, { Component } from "react";

export class ItemTask extends Component {
    handleCheckboxChange = () => {
        const { tasks, onCheckboxChange } = this.props;
        onCheckboxChange(tasks.id);
    };

    render () {
        const { tasks, onDelete } = this.props;

        return (
            <li>
                <div>
                    <input 
                        type="checkbox"
                        name='completed'
                        checked={tasks.completed}
                        onChange={this.handleCheckboxChange}
                    />
                    <p
                    style={{textDecoration: tasks.completed ? "line-through" : "none",}}>
                        {tasks.task}
                    </p>
                    <button type="button" onClick={() => onDelete(tasks.id)}>Delete</button>
                </div>
            </li>
        );
    }
}