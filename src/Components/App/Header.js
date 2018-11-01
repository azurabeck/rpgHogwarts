import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Header extends Component {
    render() {
        return(
            <Navbar collapseOnSelect>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Hogwarts</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
         
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"> Home </NavItem>
                        <NavItem eventKey={2} href="#"> Regras </NavItem>
                        <NavItem eventKey={2} href="#"> Itens </NavItem>
                        <NavItem eventKey={2} href="#"> Feitiços </NavItem>
                        <NavItem eventKey={2} href="#"> Alunos </NavItem>
                        <NavItem eventKey={2} href="#"> Profissionais </NavItem>
                        <NavItem eventKey={2} href="#"> Contato </NavItem>
                        <NavItem eventKey={2} href="#"> Login </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header          

{/* <Nav>

    <NavItem eventKey={1} href="#">
        Link
    </NavItem>

    <NavItem eventKey={2} href="#">
        Link
    </NavItem>

    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown> 
</Nav> */}