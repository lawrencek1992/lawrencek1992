import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    return (
        <Container className="pt-5 mt-5 Contact" fluid>
            <h1 className="section-title mt-5 pt-5 pb-5 text-center" id="contact-title">
                Please reach out if you'd like to work together!
            </h1>
            <Row className="pb-5">
                <Col xs={10} sm={6} className="text-right" id="email">
                    <strong className="pr-1">
                        Email:
                    </strong> 
                    lawrencek1992@gmail.com
                </Col>
                <Col xs={10} sm={5} id="phone">
                    <strong className="pr-1">
                        Phone:
                    </strong>
                    (512) 365-4209
                </Col>
            </Row>
            <Row>
                <Col className="text-right">
                    <a  href="https://github.com/lawrencek1992" target="_blank" rel="noreferrer noopener">
                        <Button className="btn" variant="outline-info">
                            <FontAwesomeIcon icon={faGithub} className="mr-1" />
                            Github
                        </Button>
                    </a>
                </Col>
                <Col>
                    <a href="https://drive.google.com/file/d/1ZaxIawTktA-ybY45vMMBo-GyU-4sqIs7/view?usp=sharing" target="_blank" rel="noreferrer noopener">
                        <Button variant="outline-info">
                            Resume
                        </Button>
                    </a>
                </Col>
            </Row>
            <footer />
        </Container>
    );
}

export default Contact;