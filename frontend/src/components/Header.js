import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import logo from './logo.png'
const Header = ({ cartItems }) => {
  return (
    <>
      <nav class="navbar row">
        <div class="col-12 col-md-3">
          <div class="navbar-brand">
            <Link to="/">
              {" "}
              <img width="150px" height="50px" src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div class="col-12 col-md-4 mt-2 mt-md-0">
          <Search />
        </div>

        <div class="col-12 col-md-1 mt-4 mt-md-0 text-center">
          <Link to={"/cart"}>
            <span id="cart" class="ml-3 navbar-effect">
              Cart
            </span>
            <span class="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
        </div>

        <div class="col-12 col-md-3 mt-2 mt-md-0">
          <ul class="nav">
            <li class="nav-item ">
              <Link class="nav-link text-white navbar-effect" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active text-white navbar-effect"
                to={"/about"}
              >
                About us
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link text-white navbar-effect" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li class="nav-item ">
              {/* <Link class="nav-link text-white" to={"/signin"}>
                Login in
              </Link> */}
              <div class="dropdown">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    class="rounded-circle"
                    height="30"
                    alt="User Avatar"
                    loading="lazy"
                  />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <Link class="nav-link  dropdown-item" to={"/login"}>
                    Login
                  </Link>
                  <Link class="nav-link  dropdown-item" to={"/signin"}>
                    SignUp /Register
                  </Link>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
