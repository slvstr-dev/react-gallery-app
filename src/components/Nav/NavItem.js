import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Display single navigation item
 * @param {string} href
 * @param {Object} styles
 * @param {string} category
 * @returns {JSX.Element}
 * @constructor
 */
export const NavItem = ({ href, styles, category }) => {
    return (
        <li>
            <NavLink to={href} activeClassName={styles["active"]}>
                {category}
            </NavLink>
        </li>
    );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
};
