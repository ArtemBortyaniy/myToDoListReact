import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Section } from "./Section/Section";
import { Form } from "./Form/Form";
import { ListTasks } from "./ListTasks/ListTasks";

export class App extends Component {
  
  state = {
    tasks : [],
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

  handleCheckboxChange = (updatedTasks) => {
    this.setState({ tasks: updatedTasks });
  };

  render () {
  const { tasks } = this.state;

    return (
        <div>
          <Section title={'My to do list'} type={'h1'}>
              <Form onSubmit={this.handleAddTask}></Form>
          </Section>
          <Section>
              <ListTasks tasks={tasks} onCheckboxChange={this.handleCheckboxChange}></ListTasks>
          </Section>
        </div>
    );
  }
};
