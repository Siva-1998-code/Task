import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nick from './nick.jpg'
import Linda from './linda.jpg'
import { Button } from 'react-bootstrap';

function Profile() {
    return (
        <div className='bg-dark text-light '>
            <Container className='text-center'>
                <Row className='projects '  xs={12} md={3}>
                    <Col align='start'>
                    <Card.Img variant="top" src={Nick} className='pt-5 pb-5'  style={{ width: '18rem' }} />
                    </Col>
                    <Col align='start'>
                    <h3>Nick Perry</h3>
                    <h6  className='pt-3 pb-3'>Developer</h6>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.</p>
                    </Col>
                    <Col ><Button id='active'>Read more</Button></Col>
                </Row>
                <Row className='projects '  xs={12} md={3}>
                    <Col align='start'>
                    <Card.Img variant="top" src={Linda} className='pt-5 pb-5'  style={{ width: '18rem' }} />
                    </Col>
                    <Col align='start'>
                    <h3>Linda Hudson</h3>
                    <h6  className='pt-3 pb-3'>designer</h6>
                    <p>Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer.</p>
                    </Col>
                    <Col ><Button id='active'>Read more</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile


