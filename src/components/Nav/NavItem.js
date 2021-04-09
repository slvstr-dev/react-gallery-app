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
            <a href={href}>{category}</a>
        </li>
    );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default NavItem;
