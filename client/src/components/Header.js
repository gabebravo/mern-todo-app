import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar className="header-color" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand style={{ color: '#fff', fontSize: '2rem' }} href="/">Todos List</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={'/addTodo'} style={{ color: '#fff', fontSize: '1rem' }}>Add Todos</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

// href="/addTodo"