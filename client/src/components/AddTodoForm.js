import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

const AddTodoForm = ({ description, handleFormInput, handleSubmission }) => {
  const button = description.length === 0 ? 
  <Button className="add-btn" disabled>Submit</Button>:
  <Button onClick={handleSubmission} className="add-btn">Submit</Button>
  return (
    <Container>
      <Row style={{ paddingTop: '20vh' }}><Col>
          <Form>
            <FormGroup>
              <h1 htmlFor="task">Enter Task</h1>
              <Input type="text" name="task" 
                onChange={handleFormInput}
                value={description} 
                placeholder="ex. Walk the dog" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row><Col>{button}</Col></Row>
    </Container>
  )
}


export default AddTodoForm;