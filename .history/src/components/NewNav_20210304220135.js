import React, { Component } from "react";
import logo from "../images/dgcLogo.svg";
import { Nav, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { HashLink as Link } from 'react-router-hash-link';


export default class NewNav extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
        window.addEventListener("scroll", this.navTransparent);
        window.addEventListener("scroll", this.navShadow);
    };
    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementById("logo");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("logoShrink");
      
        } else {
            headerEl.classList.remove("logoShrink");
        }
    }

    navTransparent() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementById("navbar");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("navbarBg");
      
        } else {
            headerEl.classList.remove("navbarBg");
        }

    }
  
    navShadow() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            headerEl = document.getElementById("navbar");
        if (distanceY > shrinkOn) {
            headerEl.classList.add("navShadow");
      
        } else {
            headerEl.classList.remove("navShadow");
        }
    }
    render() {
        return <div className="">
            <Navbar collapseOnSelect id="navbar" className="newNav" expand="xl">
            <Navbar.Brand href="/#toTop"><img id="logo" src={logo} alt="Derby Golf Centre"/></Navbar.Brand>
            <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                            <Link
                            to="/"
                            spy={true}
                            smooth={true}
                        >
                            
                                <Nav.Link activeClassName="active" eventKey="1" as={Link} to="/">Home</Nav.Link>
                            </Link>
                        <Link
                            to="/shop"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link activeClassName="active" id="nav-links" href="/shop">Shop</Nav.Link>
                        </Link>
                    <Link
                            to="/lessons"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link activeClassName="active" href="/lessons">Book a Lesson</Nav.Link>
                        </Link>
                        <Link
                            to="/opening-times"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link activeClassName="active" href="/about">Opening Times</Nav.Link>
                        </Link>
                        <Link
                            to="/contact"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link activeClassName="active" href="/contact">Contact</Nav.Link>
                        </Link>
                        <Link
                            to="/driving-range"
                            spy={true}
                            smooth={true}
                        >
                            <Nav.Link activeClassName="active" href="/driving-range">Driving Range</Nav.Link>
                            </Link>
                </Nav>

                    </Navbar.Collapse>
        </Navbar>
            </div>
    
    }
}