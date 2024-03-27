import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">PMS</div>
          <ul className="nav-links">
            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li> */}
          </ul>
          <a href="#" className="add-product-btn">
            Add Product
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
