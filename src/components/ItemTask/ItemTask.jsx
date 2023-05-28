import React, { Component } from "react";
import css from './ItemTask.module.css';
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";

export class ItemTask extends Component {
    handleCheckboxChange = () => {
        const { tasks, onCheckboxChange } = this.props;
        onCheckboxChange(tasks.id);
    };

    render () {
        const { tasks, onDelete } = this.props;

        return (
            <li>
                <div className={css.item}>
                    <input 
                        type="checkbox"
                        name='completed'
                        checked={tasks.completed}
                        onChange={this.handleCheckboxChange}
                        className={css.input}
                    />
                    <p
                    style={{textDecoration: tasks.completed ? "line-through" : "none",}} className={css.task}>
                        {tasks.task}
                    </p>
                    <DeleteIcon 
                        width='25px' 
                        height='25px' 
                        onClick={() => onDelete(tasks.id)}
                        fill="white"
                    />
                </div>
            </li>
        );
    }
}