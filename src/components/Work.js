import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import shoplistPhoto from '../media/shoplist-photo.png';
import blogPhoto from '../media/blog-photo.png';
import productPhoto from '../media/product-photo.png';
import palindromePhoto from '../media/palindrome-photo.png';
import surveyPhoto from '../media/survey-photo.png';
import beyondNaturePhoto from '../media/beyond-nature-photo.png';
import lightBrightPhoto from '../media/light-bright-photo.png';
import { ShoplistModal, BlogModal, ProductModal, PalindromeModal, SurveyModal, BeyondNatureModal } from './Modals';

const Work = () => {
    const [shoplistModal, setShoplistModal] = useState(false);
    const [blogModal, setBlogModal] = useState(false);
    const [productModal, setProductModal] = useState(false);
    const [palindromeModal, setPalindromeModal] = useState(false);
    const [surveyModal, setSurveyModal] = useState(false);
    const [beyondNatureModal, setBeyondNatureModal] = useState(false);
    const [lightBrightModal, setLightBrightModal] = useState(false);

    return (
        <Container className="Work" fluid>
            <h1 className="mt-5 pt-5 text-center" id="work-title">
                Work
            </h1>
            <Row className="justify-content-around pb-4" id="projects-grid">
                <Col 
                    xs={10}
                    sm={5}
                    className="project-tile rounded mt-3"
                    onClick={() => setLightBrightModal(true)}
                >
                    <Image 
                        src={lightBrightPhoto} 
                        alt="Screen shot of a Light Bright web app"
                        className="mt-3 mb-2 project-image"
                        fluid
                        rounded/>
                    <br />
                    <p class="project-title text-center">Light Bright</p>
                </Col>
                <Col 
                    xs={10}
                    sm={5}
                    className="project-tile rounded mt-3"
                    onClick={() => setShoplistModal(true)}
                >
                        <Image 
                            src={shoplistPhoto} 
                            alt="Screen shot of Shoplist web app"
                            className="mt-3 mb-2 project-image"
                            fluid
                            rounded/>
                        <br />
                        <p class="project-title text-center">Shoplist</p>
                </Col>
                <Col 
                    xs={10}
                    sm={5}
                    className="project-tile rounded mt-3"
                    onClick={() => setBeyondNatureModal(true)}
                >
                        <Image 
                            src={beyondNaturePhoto} 
                            alt="Screen shot of Beyond Nature CO website"
                            className="mt-3 mb-2 project-image"
                            fluid
                            rounded/>
                        <br />
                        <p class="project-title text-center">Beyond Nature CO</p>
                </Col>
                <Col 
                    xs={10}
                    sm={5}
                    className="mt-3 project-tile rounded"
                    onClick={() => setBlogModal(true)}
                >
                        <Image 
                            src={blogPhoto} 
                            alt="Screen shot of React Coding Blog"
                            className="mt-3 mb-2 project-image"
                            fluid
                            rounded/>
                        <br />
                        <p class="project-title text-center">Coding Blog</p>
                </Col>
                <Col 
                    xs={10}
                    sm={5}
                    className="mt-3 project-tile rounded"
                    onClick={() => setProductModal(true)}
                >
                        <Image 
                            src={productPhoto} 
                            alt="Screen shot of Product Landing Page"
                            className="mt-3 mb-2 project-image"
                            fluid
                            rounded/>
                        <br />
                        <p class="project-title text-center">Product Landing Page</p>
                </Col>
                <Col 
                    xs={10}
                    sm={5}
                    className="mt-3 project-tile rounded"
                    onClick={() => setPalindromeModal(true)}
                >
                        <Image 
                            src={palindromePhoto} 
                            alt="Screen shot of Palindrome Checker"
                            className="mt-3 mb-2 project-image"
                            fluid
                            rounded/>
                        <br />
                        <p class="project-title text-center">Palindrome Checker</p>
                </Col>
                <Col 
                    xs={10}
                    sm={5}
                    className="mt-3 project-tile rounded"
                    onClick={() => setSurveyModal(true)}
                >
                        <Image 
                            src={surveyPhoto} 
                            alt="Screen shot of Climber Survey Form"
                            className="mt-3 mb-2 project-image"
                            fluid
                            rounded/>
                        <br />
                        <p class="project-title text-center">Climber Survey Form</p>
                </Col>
            </Row>
            <ShoplistModal shoplistModal={shoplistModal} setShoplistModal={setShoplistModal} />
            <BeyondNatureModal beyondNatureModal={beyondNatureModal} setBeyondNatureModal={setBeyondNatureModal} />
            <BlogModal blogModal={blogModal} setBlogModal={setBlogModal} />
            <ProductModal productModal={productModal} setProductModal={setProductModal} />
            <PalindromeModal palindromeModal={palindromeModal} setPalindromeModal={setPalindromeModal} />
            <SurveyModal surveyModal={surveyModal} setSurveyModal={setSurveyModal} />
        </Container>
    );
}

export default Work;