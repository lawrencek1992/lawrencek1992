import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-end">
            <Nav>
                <Nav.Link href="/">
                    Home
                </Nav.Link>
                <Nav.Link  href="/work">
                    Work
                </Nav.Link>
                <Nav.Link href="/contact">
                    Contact
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;