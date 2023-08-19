import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Grid1 from './grid-1.jpeg'
import Grid2 from './grid-2.jpeg'
import Grid3 from './grid-3.jpeg'
import Grid4 from './grid-4.jpeg'
import Grid5 from './grid-5.jpeg'
import Grid6 from './grid-6.jpeg'
import './Template.css'
function Grid() {
    return (
        <div className='bg-dark'>
            <Container className='text-center'>
                <Row xs={8} md={12} className='pb-5'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className='grid' src={Grid1} />
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Grid6} />
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Grid3} />
                        </Card>
                    </Col>
                </Row>
                <Row className='pb-5'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Grid4} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Grid5} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15.2rem' }}>
                            <Card.Img variant="top" src={Grid2} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Grid;


