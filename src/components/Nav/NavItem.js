import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

/**
 *
 * @param href
 * @param category
 * @returns {JSX.Element}
 * @constructor
 */
const NavItem = ({ href, category }) => {
    return (
        <li>
            <NavLink to={href}>{category}</NavLink>
        </li>
    );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default NavItem;
