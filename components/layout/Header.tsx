import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="appear px-4 py-2 flex justify-between items-center h-[5vh] opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <nav>
                <ul className="list-none flex m-0 p-0">
                    <li className="ml-5">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="ml-5">
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li className="ml-5">
                        <Link href="mailto:leojcyou@outlook.com">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
