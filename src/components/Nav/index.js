import React, { Component } from "react";
import NavList from "./NavList";
import styles from "./style.module.css";

/**
 *
 */
class Nav extends Component {
    state = {};

    render() {
        return (
            <nav className={styles["main-nav"]}>
                <NavList />
            </nav>
        );
    }
}

export default Nav;
