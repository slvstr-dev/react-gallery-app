import React from "react";
import { NavList } from "./NavList";
import styles from "./style.module.css";

/**
 *
 */
export const Nav = () => {
    return (
        <nav className={styles["main-nav"]}>
            <NavList styles={styles} />
        </nav>
    );
};
