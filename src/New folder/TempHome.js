import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TempNav.css'
import Button from 'react-bootstrap/Button';
import logo from './4751965.jpg'

function TempHome() {
  return (
    <Container fluid className=' bg-primary text-light section'> 
      <Row >
        <Col className='heading pt-5'>
        <h1>You can set breakpoints for the fluid.<br/> <span id='span'>Setting it to a breakpoint</span></h1>
        <p>React-Bootstrap only contains components that are present in vanilla Bootstrap. If functionality was removed from Bootstrap, then it was also removed from React-Bootstrap</p>
        <Button className='btn btn-danger'>FIND OUR MORE</Button>
        </Col>
        <Col className='my-5'>
        <img bg-fluid src={logo} width={'300px'}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default TempHome;