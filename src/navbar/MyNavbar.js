import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

import './MyNavbar.css';

class MyNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar color="faded" light expanded="md">
                    <span className="container">
                    <NavbarBrand href="/">Cat sightings</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/add-sighting" className="my-navbar-add">
                                Add
                            </Link>
                        </NavItem>
                    </Nav>
                    </span>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MyNavbar;
