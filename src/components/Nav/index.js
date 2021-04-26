import React from "react";
import { NavItem } from "./NavItem";
import { DefaultTopics } from "../../data/DefaultTopics";
import styles from "./style.module.css";

/**
 * Display list of navigation items
 * @returns {JSX.Element}
 * @constructor
 */
export const Nav = () => {
    const navItems = DefaultTopics.map((item) => (
        <NavItem
            key={item.key}
            href={item.href}
            styles={styles}
            category={item.category}
        />
    ));

    return (
        <nav className={styles["main-nav"]}>
            <ul>{navItems}</ul>{" "}
        </nav>
    );
};
