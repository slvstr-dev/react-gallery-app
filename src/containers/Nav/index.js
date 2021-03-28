import NavList from "./Components/NavList";

import styles from "../Nav/style.module.css";

const Nav = () => {
    return (
        <nav className={styles["main-nav"]}>
            <NavList />
        </nav>
    );
};

export default Nav;
