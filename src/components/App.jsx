import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Section } from "./Section/Section";
import { Form } from "./Form/Form";
import { ListTasks } from "./ListTasks/ListTasks";

export class App extends Component {
  
  state = {
    tasks : [],
  }

  componentDidMount = () => {
    const tasks = localStorage.getItem('tasks');
    let parsetTasks = JSON.parse(tasks);

    if(parsetTasks === null) {
      parsetTasks = [];
    }

    this.setState({tasks : parsetTasks});
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if(prevState.tasks !== tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  handleAddTask = ({task}) => {
    const id = nanoid();
    const completed = false;
    const { tasks } = this.state
    
    const existingTasks = tasks.find(item => item.task === task);
    if (existingTasks || task === "") {
      alert(`${task} is already in tasks or value task is empty`);
      return;
    }
    
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        { task, id, completed }
      ]
    }));
  }

  handleUpdatedTasks = (updatedTasks) => {
    this.setState({ tasks: updatedTasks });
  };

  render () {
    const { tasks } = this.state;
    console.log(tasks);
    return (
        <div>
          <Section title={'My to do list'} type={'h1'}>
              <Form onSubmit={this.handleAddTask}></Form>
          </Section>
          <Section>
              <ListTasks tasks={tasks} onCheckboxChange={this.handleUpdatedTasks}></ListTasks>
          </Section>
        </div>
    );
  }
};
