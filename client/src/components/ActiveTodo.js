import React from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ActiveTodo = ({ todoDescription, id, handleCompletedClick }) => (
  <Row style={{ justifyContent: 'center' }}>
    <Col sm="6">
      <Card block inverse style={{ backgroundColor: '#2980b9', borderColor: '#2980b9', marginBottom: '5vh' }}>
        <CardTitle>
          <Link to={`/edit-todo/${id}`}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Link>
          {todoDescription}</CardTitle>
        <Button onClick={() => handleCompletedClick(id)}>Mark Completed</Button>
      </Card>
    </Col>
  </Row>
);

ActiveTodo.propTypes = {
  todoDescription: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired, 
  handleCompletedClick: PropTypes.func.isRequired
}

export default ActiveTodo;