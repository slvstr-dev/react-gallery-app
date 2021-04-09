import PropTypes from "prop-types";

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
