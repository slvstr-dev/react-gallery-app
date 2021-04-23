import React from "react";
import NavList from "./NavList";
import styles from "./style.module.css";

/**
 *
 */
const Nav = () => {
    return (
        <nav className={styles["main-nav"]}>
            <NavList />
        </nav>
    );
};

export default Nav;
