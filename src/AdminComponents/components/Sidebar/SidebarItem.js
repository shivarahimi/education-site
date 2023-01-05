import { faChevronDown, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { items } from "./components/SidebarLink/SidebarLink";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.items) {
    return (
      <div
        className={open ? "sidebar-item open" : "sidebar-item"}
        onClick={() => setOpen(!open)}
      >
        <div className="sidebar-title">
          <FontAwesomeIcon className="toggle-btn" icon={faChevronDown} />
          <span>
            {item.title}
            {item.icon}
          </span>
        </div>
        <div className="sidebar-content">
          {item.items &&
            item.items.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={open ? "sidebar-item open" : "sidebar-item"}
        onClick={() => setOpen(!open)}
      >
        <div className="sidebar-title">
          <span>
            <NavLink to={`${item.src}`}>
              {item.title}
              {item.icon}
            </NavLink>
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
