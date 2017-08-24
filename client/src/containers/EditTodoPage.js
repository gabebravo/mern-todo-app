import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import AddTodoForm from '../components/AddTodoForm';
import ModalPop from '../components/ModalPop';

class EditTodoPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      taskDescription: '',
      userId: props.match.params.id,
      showModal: false
    }
  }

  componentDidMount() {
    axios.get(`/todo/${this.state.userId}`)
    .then( result => {
      this.setState({
        taskDescription: result.data.task
      })
    })
    .catch( result => {
      console.log(result);
    })
  }

  updateTaskDescription = e => {
    this.setState({
      taskDescription: e.target.value
    })
  }

  submitTask = () => {
    axios.patch(`/todo/${this.state.userId}`, {
      task: this.state.taskDescription
    })
    .then(response => {
      if(response.data.length > 0){
        this.setState({ showModal: true });
      }
    })
    .catch( response => {
      console.log(response);
    });
    this.setState({
      taskDescription: ''
    });
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
          bodyText="The todo has been updated. Please return to the main page by clicking OK below."
        />
      </div>
    );
  }
}

export default EditTodoPage;