import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LightBrightModal = ({ lightBrightModal, setLightBrightModal }) => {
    const hideModal = () => {
        setLightBrightModal(false)
    };

    return (
        <Modal show={lightBrightModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Light Bright</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>A Light Bright web app</article>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className=" text-center pl-3">
                    <Col className="col-sm-3">React</Col>
                    <Col className="col-sm-3">Reactstrap</Col>
                    <Col className="col-sm-3">Redux</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://light-bright.netlify.app/" class="btn btn-outline-info" target="_blank" rel="noreferrer noopener">View</a>
                <a href="https://github.com/lawrencek1992/light-bright.git" class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
};

export const ShoplistModal = ({ shoplistModal, setShoplistModal}) => {
    const hideModal = () => {
        setShoplistModal(false)
    };

    return (
        <Modal show={shoplistModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Shoplist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                    A web app to save grocery lists. 
                </article>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className="text-center pl-3">
                    <Col className="col-sm-3">React</Col>
                    <Col className="col-sm-3">React-Bootstrap</Col>
                    <Col className="col-sm-3">Sass</Col>
                    <Col className="col-sm-3">Google Firebase</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://shoplist-shopping-app.netlify.app/" class="btn btn-outline-info" target="_blank" rel="noreferrer noopener">View</a>
                <a href="https://github.com/lawrencek1992/Shoplist.git" class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
}

export const BeyondNatureModal = ({ beyondNatureModal, setBeyondNatureModal}) => {
    const hideModal = () => {
        setBeyondNatureModal(false);
    }
    return (
        <Modal show={beyondNatureModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Beyond Nature CO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                    A website for a small business in Erie, Colorado. 
                </article>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className="text-center pl-3">
                    <Col className="col-sm-3">React</Col>
                    <Col className="col-sm-3">React-Bootstrap</Col>
                    <Col className="col-sm-3">Sass</Col>
                    <Col className="col-sm-3">Google Firebase</Col>
                    <Col className="col-sm-3">Filepond Image Uploader</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://beyond-nature-co.netlify.app/" class="btn btn-outline-info" target="_blank" rel="noreferrer noopener">View</a>
                <a href="https://github.com/lawrencek1992/Beyond-Nature-CO.git" class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
}

export const BlogModal = ({ blogModal, setBlogModal}) => {
    const hideModal = () => {
        setBlogModal(false);
    }
    return (
        <Modal show={blogModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Coding Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                    A blog to document my coding progress. Built with create-react-app. Google Firebase provides user authentication and database storage. 
                </article>
                <em>
                    <p className="demo-account-info pl-5 pt-2">
                        If you check out my blog, try logging in to the demo account to see the full functionality.
                        <br />
                        <b>
                            Email: 
                        </b>
                        <span>
                            lawrencek1992.demo@gmail.com
                        </span>
                        <br />
                        <b>
                            Password: 
                        </b>
                        <span>
                            demoAccount
                        </span>

                    </p>
                </em>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className="text-center pl-3">
                    <Col className="col-sm-3">React</Col>
                    <Col className="col-sm-3">Google Firebase</Col>
                    <Col className="col-sm-3">Quill Rich Text Editor</Col>
                    <Col className="col-sm-3">Font Awesome Icons</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://lawrence-coding-blog.netlify.app/" class="btn btn-outline-info" target="_blank" rel="noreferrer noopener">View</a>
                <a href="https://github.com/lawrencek1992/React-Blog-App.git" class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
}

export const ProductModal = ({ productModal, setProductModal }) => {
    const hideModal = () => {
        setProductModal(false);
    }
    return (
        <Modal show={productModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Product Landing Page</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                    A product landing page for the Honnold Signature Spatula, a product sold by Black Diamond Equipment.  
                </article>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className="text-center pl-3">
                    <Col className="col-sm-3">HTML</Col>
                    <Col className="col-sm-3">CSS</Col>
                    <Col className="col-sm-3">Javascript</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://codepen.io/lawrencek1992/full/RwGjErQ" class="btn btn-outline-info" target="_blank" rel="noreferrer noopener">View</a>
                <a href="https://gist.github.com/lawrencek1992/eded52c871feefb0239df93dbc33d656" class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
}

export const PalindromeModal = ({ palindromeModal, setPalindromeModal }) => {
    const hideModal = () => {
        setPalindromeModal(false);
    }
    return (
        <Modal show={palindromeModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Palindrome Checker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                    A page which checks whether a given string is a palindrome.  
                </article>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className="text-center pl-3">
                    <Col className="col-sm-3">HTML</Col>
                    <Col className="col-sm-3">CSS</Col>
                    <Col className="col-sm-3">Javascript</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://codepen.io/lawrencek1992/full/dyOzgqd" class="btn btn-outline-info" target="_blank" rel="noreferrer noopener">View</a>
                <a href="https://gist.github.com/lawrencek1992/232e6dc752bc9b3f133434d96ecc8f26"  class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
}

export const SurveyModal = ({ surveyModal, setSurveyModal }) => {
    const hideModal = () => {
        setSurveyModal(false);
    }
    return (
        <Modal show={surveyModal} onHide={hideModal} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Climber Survey Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                A user interface for a climber survey. The form gives feedback to the user upon submission but does not store user input. 
                </article>
                <label className="pl-3 pt-2 technologies-label">Built With:</label>
                <Row className="text-center pl-3">
                    <Col className="col-sm-3">HTML</Col>
                    <Col className="col-sm-3">CSS</Col>
                    <Col className="col-sm-3">Javascript</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <a href="https://codepen.io/lawrencek1992/full/oNzoGNa" target="_blank" class="btn btn-outline-info" rel="noreferrer noopener">View</a>
                <a href="https://gist.github.com/lawrencek1992/c4c37f5e0e4f2b4f10fbc02909c3ad40"  class="btn btn-outline-light" target="_blank" rel="noreferrer noopener">Code</a>
            </Modal.Footer>
        </Modal>
    );
}
