const NavItem = ({ href, category }) => {
    return (
        <li>
            <a href={href}>{category}</a>
        </li>
    );
};

export default NavItem;
