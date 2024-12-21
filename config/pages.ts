interface Page {
    name: string;
    route: string;
    underConstruction: boolean;
}

const pages: Page[] = [
    {
        name: "Home",
        route: "/",
        underConstruction: false,
    },
    {
        name: "About",
        route: "/about",
        underConstruction: false,
    },
    {
        name: "Blog",
        route: "/blog",
        underConstruction: false,
    },
    {
        name: "Projects",
        route: "/projects",
        underConstruction: true,
    },
];

export default pages;