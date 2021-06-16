import React from 'react';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container className="pt-5 About" fluid>
                <section id="far-mountains">
                    <div id="far-mountain-1"></div>
                    <div id="far-mountain-2"></div>
                    <div id="far-mountain-3"></div>
                </section>
                <section id="near-mountains">
                    <div id="near-mountain-1"></div>
                    <div id="near-mountain-2"></div>
                    <div id="near-mountain-3"></div>
                    <div id="near-mountain-4"></div>
                </section>
                <div id="moon"></div>
                <header>
                <h1>Kelly Lawrence</h1>
                    <h2 id="header-h2">web developer</h2>
                </header>
                <section id="stars">
                    <div class="star-1"></div>
                    <div class="star-2"></div>
                    <div class="star-3"></div>
                    <div class="star-4"></div>
                </section>
        </Container>
    );
}

export default About;