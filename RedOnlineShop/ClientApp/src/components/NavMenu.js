import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import "./NavMenu.css";
import { useAuth } from "../hooks/useAuth";

const NavMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [firstName, setFirstName] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const handleStorage = () => {
      if (localStorage.getItem("firstName")) {
        setFirstName(localStorage.getItem("firstName"));
      }
    };

    window.addEventListener("storage", handleStorage());
    return () => window.removeEventListener("storage", handleStorage());
  }, []);

  useEffect(() => {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
      JSON.parse(localStorage.setItem("cart", "[]"));
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    setShoppingCart(cart);
  }, [navigate]);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-lg bg-gray-800 border-bottom box-shadow mb-3"
        container={"lg"}
        dark
      >
        <NavbarBrand tag={Link} to="/">
          <img
            className="w-10 h-10"
            src={require("../assets/RedLogo.png")}
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2 border-white !text-white"
        />
        <Collapse
          className="d-sm-inline-flex flex-sm-row"
          isOpen={!isCollapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-light" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-light" to="/product">
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-light" to="/contact-us">
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-light" to="/about-us">
                About Us
              </NavLink>
            </NavItem>
          </ul>
          {!firstName ? (
            <ul className="navbar-nav flex-grow-0">
              <NavItem>
                <Badge color="danger" className="absolute" pill>
                  <p className="text-[8px]">{shoppingCart.length}</p>
                </Badge>
                <NavLink tag={Link} className="text-light" to="/shopping-cart">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/signup">
                  Signup
                </NavLink>
              </NavItem>
            </ul>
          ) : (
            <div className="flex-row justify-between navbar-nav items-center">
              <NavItem>
                <Badge color="danger" className="absolute" pill>
                  <p className="text-[8px]">{shoppingCart.length}</p>
                </Badge>
                <NavLink tag={Link} className="text-light" to="/shopping-cart">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </NavLink>
              </NavItem>
              <span className="text-light mx-2 ">Hello {firstName} !</span>
              <button
                className="justify-center  px-3 py-1.5 text-sm font-semibold leading-6 text-red-400 shadow-sm group-hover:bg-white"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          )}
        </Collapse>
        {/* {!state.isLogin?(
          <>

            </>):null} */}
      </Navbar>
    </header>
  );
};

export { NavMenu };
