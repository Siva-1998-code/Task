import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import Banner from './portrait-caucasian-woman-smiling.jpg'
import Image from 'react-bootstrap/Image';

function HomeBio() {
    return (
        <div className='bg-dark'>
            <Container >
                <Row className='text-center'>
                    <Col className='bio text-light' align='start'>
                        <h2>I’m Linda Larson, a twenty-nine-year-old UI/UX designer from Los Angeles, CA</h2>
                        <p>Currently I am co-leading a design team at web design studio.</p>
                        <button className='btn btn-primary'>Contacts</button>
                    </Col>
                    <Col xs={12} md={5} className='mb-4 mt-4'>
                        <Image src={Banner} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeBio

