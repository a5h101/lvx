import React from 'react';
import './Navbar.css';
import logo from '../../../src/logo.svg';
import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div id="logo">
          {/* <Link to="/"> */}
          <img className="logo" src={logo} alt="logo" />
          {/* </Link> */}
        </div>
        <div className="searchBox search">
          <button
            type="submit"
            className="searchBtn buttom search btn"
            // onClick={handleSubmit}
          >
            <FaSearch className="search" size={18} />
          </button>
          <input type="text" className="searchBar " placeholder="Search" />
        </div>
        <div className="navBtns">
          {/* <Link to=""> */}
          <button className="Login navBtn btn button">Login</button>
          {/* </Link> */}
          {/* <Link to=""> */}
          <button className="Sell navBtn btn button">Sell</button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};
export default Navbar;
