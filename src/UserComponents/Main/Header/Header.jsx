import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../style/UserStyle/Header/Header.css";
import Search from "./../UserContent/Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "./../../../AdminComponents/context/ShoppingCartContext/CartContext";
import Cart from "./../Shopping/Cart";

const Header = () => {
  const { cart, showHideCart } = useContext(CartContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className="navbar">
            <div className="main col-md-6">
              <ul
                className={
                  sidebar
                    ? "responsive-navigation active"
                    : "responsive-navigation"
                }
              >
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    خانه
                  </NavLink>
                </li>
                <div className="dropdownHeader">
                  <li className="nav-item nav-link linkHeader">
                    <a href="#">
                      دوره ها
                      <FontAwesomeIcon
                        className="mx-1"
                        icon={faCaretDown}
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </li>
                  <ul className="dropdown-menuHeader">
                    <NavLink to="/home/courseList">
                      <li
                        className="drop-item"
                        style={{ color: "rgb(26 101 101)" }}
                      >
                        همه دوره ها
                      </li>
                    </NavLink>
                    <li className="drop-item">بوت استرپ</li>
                    <li className="drop-item">جاوااسکریپت</li>
                    <li className="drop-item">متلب</li>
                    <li className="drop-item">ری اکت</li>
                    <li className="drop-item">پایتون</li>
                  </ul>
                </div>
                <li className="nav-item">
                  <NavLink to="/home/teachers" className="nav-link">
                    اساتید
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/home/contactUs" className="nav-link">
                    تماس با ما
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <div className="response">
                  <FontAwesomeIcon
                    className="hamburger"
                    icon={faBars}
                    onClick={showSidebar}
                  />
                </div>
                <div className="logo">
                  <img
                    className="star"
                    src={require("../../../Assets/UserAssets/Header/logo (1).png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="shopping col-md-6">
              <div className="logo">
                <FontAwesomeIcon
                  className="shoppingcart"
                  icon={faCartShopping}
                  onClick={showHideCart}
                />
                <Cart />
                {cart.length > 0 && (
                  <div className="item-count">
                    <span>{cart.length}</span>
                  </div>
                )}
              </div>
              <div className="logo">
                <NavLink to="/home/login">
                  <FontAwesomeIcon
                    className="user"
                    icon={faUser}
                    title="ورود"
                  />
                </NavLink>
              </div>
              <Search />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
