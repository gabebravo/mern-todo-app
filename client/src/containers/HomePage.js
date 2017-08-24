import React, { Component } from 'react';
import Header from '../components/Header'
import { Container, Row, Col } from 'reactstrap';
import TodosList from '../components/TodosList'

class HomePage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row style={{ textAlign: 'center', paddingTop: '20vh' }}>
            <Col><TodosList /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;