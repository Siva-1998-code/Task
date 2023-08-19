import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import '../App.css'

function Projects() {
  return (
    <div className='projects bg-dark text-light'>
        <Container>
      <Row>
        <Col xs={3} md={3}>
        <h2>My projects</h2>
        </Col>
        <Col xs={12} md={7}>
        <h1>I'm designed dozens of appealing interfaces for websites and web apps. Take a look at my projects below.</h1>
        </Col>
        <Col>
        <Button><h5>Show</h5></Button>
        <Button id='active'><h5>Run</h5></Button>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Projects

