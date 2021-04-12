import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logout, selectAuth} from "../../features/auth/authSlice";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

export interface PageContainerProps {
    children: any;
}

const Footer = styled(Container)`
  min-height: 50px;
  line-height: 50px;
  background-color: #e9ecef;
  position: absolute;
  bottom: 0;
`;

const Body = styled.div`
  padding-bottom: 100px;
`;

const Page = styled.div`
  min-height: 100vh;
  position: relative;
`;

const PageContainer: React.FC<PageContainerProps> = ({children}) => {
    const auth = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    return (
        <Page>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Body>
                {children}
            </Body>
            <Footer fluid className="mt-5">
                <Row>
                    <Col className="px-5">
                        &copy; JP Meyer
                    </Col>
                </Row>
            </Footer>
        </Page>
    )
}

export default PageContainer;