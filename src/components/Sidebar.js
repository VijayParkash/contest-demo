import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarHandler = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.sidebar}>
        <NavLink
          to="#"
          className={styles.menu}
          style={sidebar ? { position: "fixed" } : {}}
        >
          {sidebar ? (
            <AiIcons.AiOutlineClose
              style={{ color: "#fff" }}
              onClick={sidebarHandler}
            ></AiIcons.AiOutlineClose>
          ) : (
            <Icons.FaBars
              style={{ color: "#fff" }}
              onClick={sidebarHandler}
            ></Icons.FaBars>
          )}
        </NavLink>
        <div className={styles.header}>Demo Contest</div>
      </div>
      <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
        <ul className={styles.navItems} onClick={sidebarHandler}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={styles.navText}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? styles.active : {})}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
