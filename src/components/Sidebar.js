import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const sidebarHandler = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.sidebar}>
        <Link
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
        </Link>
        <div className={styles.header}>Demo Contest</div>
      </div>
      <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
        <ul className={styles.navItems}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={styles.navText}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
