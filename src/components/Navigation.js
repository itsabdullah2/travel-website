import "./Navigation.css";
import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";
import Button from "./Button";

const navBarStyling =
  "navbar-container px-5 fixed z-10 w-full flex items-center justify-between p-3";

function Navigation() {
  const [click, setClick] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpenMenu = () => setClick(!click);
  const handleCloseMenu = () => setClick(false);

  const handleNavbarActive = () => {
    if (window.scrollY >= 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarActive);

    return () => {
      window.removeEventListener("scroll", handleNavbarActive);
    };
  }, []);

  return (
    <nav>
      <div
        className={`${isScrolling ? `${navBarStyling} active` : navBarStyling}`}
      >
        <Link to="/" className="text-xl font-bold" onClick={handleCloseMenu}>
          <h1>TRVL</h1>
        </Link>
        <ul
          className={`${
            click
              ? "navbar-links active flex items-center"
              : "navbar-links flex items-center"
          }`}
        >
          <CustomLink to="/" onClick={handleCloseMenu}>
            Home
          </CustomLink>
          <CustomLink to="/about" onClick={handleCloseMenu}>
            About
          </CustomLink>
          <CustomLink to="/services" onClick={handleCloseMenu}>
            Services
          </CustomLink>
          <CustomLink to="/products" onClick={handleCloseMenu}>
            Products
          </CustomLink>
          <CustomLink to="/pricing" onClick={handleCloseMenu}>
            Pricing
          </CustomLink>
          <CustomLink to="/sign-up" className="mr-0" onClick={handleCloseMenu}>
            <Button className="nav-item-mobile hover:bg-gray-200 hover:text-black transition duration-300 text-black font-medium text-white rounded-md">
              Sign Up
            </Button>
          </CustomLink>
        </ul>
        <div
          className="menu-icon text-white text-xl md:hidden cursor-pointer"
          onClick={handleOpenMenu}
        >
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
