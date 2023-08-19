import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import Card from 'react-bootstrap/Card';

function Experience() {
    return (
        <div className='bg-dark text-light pt-5'>
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <h1>Experience</h1>
                    </Col>
                    <Col >
                        <Row xs={15} md={15} className='box-contant mb-4'>
                            <Col>
                                <Card style={{ width: '18rem' }} className='text-center mb-3 box text-light'>
                                    <Card.Body>
                                        <Card.Title><h1>2017</h1></Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }} className='text-center mb-3 box text-light'>
                                    <Card.Body>
                                        <Card.Title><h1>2018</h1></Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }} className='text-center mb-3 box text-light'>
                                    <Card.Body>
                                        <Card.Title><h1>2019</h1></Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row xs={12} md={9} className=' box-contant mb-3'>
                            <Col>
                                <Card style={{ width: '18rem' }} className='text-center mb-3 box text-light'>
                                    <Card.Body>
                                        <Card.Title><h1>2020</h1></Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }} className='text-center mb-3 box text-light'>
                                    <Card.Body>
                                        <Card.Title><h1>2021</h1></Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }} id='active' className='text-center mb-3 box text-light'>
                                    <Card.Body>
                                        <Card.Title><h1>2022</h1></Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience

