import React, { useState } from "react";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <a className={styles.header} href="/">Kristoffer Flygare</a>
                <div className={styles.menu}>
                    <img
                        className={styles.menuBtn}
                        src={
                            menuOpen
                                ? "../../assets/navbar/closeIcon.png"
                                : "../../assets/navbar/menuIcon.png"
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.items} ${menuOpen && styles.menuOpen}`}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;