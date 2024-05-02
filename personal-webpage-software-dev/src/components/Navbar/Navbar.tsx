import React, { useState } from "react";
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils.ts";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.header} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("navbar/closeIcon.png")
                            : getImageUrl("navbar/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={styles.items}>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about">Education</a></li>
                    <li><a href="/projects">Experience</a></li>
                    <li><a href="/contact">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;