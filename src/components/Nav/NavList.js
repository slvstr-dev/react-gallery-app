import { NavItem } from "./NavItem";
import { DefaultTopics } from "../../data/DefaultTopics";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const NavList = ({ styles }) => {
    const navItems = DefaultTopics.map((item) => (
        <NavItem
            key={item.key}
            href={item.href}
            styles={styles}
            category={item.category}
        />
    ));

    return <ul>{navItems}</ul>;
};
