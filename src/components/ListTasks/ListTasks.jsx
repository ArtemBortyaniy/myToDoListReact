import { ItemTask } from "components/ItemTask/ItemTask";
import React, { Component } from "react";
import css from './ListTasks.module.css'

export class ListTasks extends Component {
    handleCheckboxChange = (id) => {
        const { tasks, onCheckboxChange } = this.props;
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        onCheckboxChange(updatedTasks);
    };

    handleDeleteTask = (id) => {
        const { tasks, onCheckboxChange } = this.props;
        const updatedTasks = tasks.filter((task) => task.id !== id);

        onCheckboxChange(updatedTasks);
    }

    render () {
        const { tasks } = this.props;

        return (
            <ul className={css.list}>
                {tasks.map((task) => (
                <ItemTask 
                    tasks={task}
                    key={task.id}
                    onCheckboxChange={this.handleCheckboxChange}
                    onDelete={this.handleDeleteTask}
                    />
                ))}
            </ul>
        );
    }
}
