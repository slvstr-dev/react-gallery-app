import NavItem from "./NavItem";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavList = () => {
    const data = [
        {
            key: 0,
            href: "cats",
            category: "Cats",
        },
        {
            key: 1,
            href: "dogs",
            category: "Dogs",
        },
        {
            key: 2,
            href: "computers",
            category: "Computers",
        },
    ];

    const navItems = data.map((item) => (
        <NavItem key={item.key} href={item.href} category={item.category} />
    ));

    return <ul>{navItems}</ul>;
};

export default NavList;
