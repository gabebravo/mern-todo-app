import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import AddTodoForm from '../components/AddTodoForm';
import ModalPop from '../components/ModalPop';

class AddTodoPage extends Component {

  state = {
    taskDescription: '', 
    showModal: false
  }

  updateTaskDescription = e => {
    this.setState({
      taskDescription: e.target.value
    })
  }

  submitTask = () => {
    axios.post('/todo', {
      task: this.state.taskDescription
    })
    .then(response => {
      if(response.data.task){
        this.setState({ showModal: true });
      }
    })
    .catch( response => {
      console.log(response);
    });
    this.setState({
      taskDescription: ''
    })
  }

  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodoForm 
          description={this.state.taskDescription}
          handleFormInput={this.updateTaskDescription}
          handleSubmission={this.submitTask}
        />
        <ModalPop 
          showModal={this.state.showModal} 
          toggleModal={this.toggle}
          headerText="Success"
          bodyText="The todo has been added. Please return to the main page by clicking OK below."
        />
      </div>
    );
  }
}

export default AddTodoPage;
