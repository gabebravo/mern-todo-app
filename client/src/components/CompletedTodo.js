import React from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';

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

export default CompletedTodo;