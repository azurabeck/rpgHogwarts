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
