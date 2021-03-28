import NavItem from "./NavItem";

const NavList = () => {
    const data = [
        { key: 0, href: "#", category: "Cats" },
        { key: 1, href: "#", category: "Dogs" },
        { key: 2, href: "#", category: "Computers" },
    ];

    const navItems = data.map((item) => (
        <NavItem key={item.key} href={item.href} category={item.category} />
    ));

    return <ul>{navItems}</ul>;
};

export default NavList;
