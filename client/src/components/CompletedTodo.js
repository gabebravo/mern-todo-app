import React from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const CompletedTodo = ({ todoDescription, id, handleClick }) => (
  <Row style={{ justifyContent: 'center' }}>
    <Col sm="6">
      <Card block inverse style={{ backgroundColor: '#95a5a6', borderColor: '#95a5a6', marginBottom: '5vh' }}>
        <CardTitle style={{ color: 'hsla(0,0%,100%,.65)' }}>{todoDescription}</CardTitle>
        <Button onClick={() => handleClick(id)}>Remove</Button>
      </Card>
    </Col>
  </Row>
);

CompletedTodo.propTypes = {
  todoDescription: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired, 
  handleClick: PropTypes.func.isRequired
}

export default CompletedTodo;