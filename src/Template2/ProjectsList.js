import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { AiOutlineRise } from 'react-icons/ai';
import { GiCoinflip } from 'react-icons/gi';
import { SiCoinmarketcap } from 'react-icons/si';
import { SiArkecosystem } from 'react-icons/si';
import { RiAdvertisementFill } from 'react-icons/ri';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


function ProjectsList() {
    return (
        <div className='bg-dark text-center'>
            <Container >
                <Row xs={12} md={3} >
                    <Col>
                        <Card style={{ width: '18rem' }} className='mb-3 cards '>
                            <Card.Body>
                                <h1><AiOutlineRise/></h1>
                                <Card.Title>
                                    <h3>Rising Agency</h3>
                                </Card.Title>
                                <Card.Text>
                                    <h6>some text</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className='mb-3 cards '>
                            <Card.Body>
                                <h1><GiCoinflip/></h1>
                                <Card.Title>
                                    <h3>Influence</h3>
                                </Card.Title>
                                <Card.Text>
                                    <h6>some text</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className='mb-3 cards '>
                            <Card.Body>
                                <h1><SiCoinmarketcap/></h1>
                                <Card.Title>
                                    <h3>Marketing</h3>
                                </Card.Title>
                                <Card.Text>
                                    <h6>some text</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs={12} md={3}>
                    <Col>
                        <Card style={{ width: '18rem' }} className='mb-3 cards '>
                            <Card.Body>
                              <SiArkecosystem/>
                                <Card.Title>
                                    <h4>Digitally</h4>
                                </Card.Title>
                                <Card.Text>
                                    <h6>some text</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className='mb-3 cards '>
                            <Card.Body>
                                <h1><RiAdvertisementFill/></h1>
                                <Card.Title>
                                    <h4>Promote</h4>
                                </Card.Title>
                                <Card.Text>
                                    <h6>some text</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className='mb-3 cards '>
                            <Card.Body>
                                <h1><BsFillArrowUpCircleFill/></h1>
                                <Card.Title>
                                    <h4>Elevate</h4>
                                </Card.Title>
                                <Card.Text>
                                    <h6>some text</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default ProjectsList;