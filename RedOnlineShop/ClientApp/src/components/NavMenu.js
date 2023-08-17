import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import './NavMenu.css';
import { useAuth } from '../hooks/useAuth';

const NavMenu = () =>  {

  const [isCollapsed,setIsCollapsed] = useState(true);
  const fullName = localStorage.getItem("fullName");
  
  const toggleNavbar =()=> {
    setIsCollapsed(!isCollapsed)
  };

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm bg-gray-800 border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">
            <img className="w-10 h-10" src={require("../assets/RedLogo.png")} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!isCollapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/product">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/contact-us">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/about-us">About Us</NavLink>
              </NavItem>
              {!fullName?(
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/signup">Signup</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/forget-password">Forget Password</NavLink>
                  </NavItem>
                </>
              ):( <span>{fullName}</span>)}
              
            </ul>
          </Collapse>
          {/* {!state.isLogin?(
          <>

            </>):null} */}
        </Navbar>
      </header>
    );
  
}

export  {NavMenu};
