import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

// Pages
import Write from '../pages/write';
import {Button, Navbar, NavbarBrand, NavbarText} from 'reactstrap';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
            err: false
        }
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavLink to='/'>
                    <NavbarBrand>Miuum</NavbarBrand>
                </NavLink>
                <NavbarText className='ml-auto'>
                    <Link to='/write' target={Write}>
                        <Button outline>
                            Write Story
                        </Button>
                    </Link>
                </NavbarText>
            </Navbar>
        );
    }
}

export default Header;