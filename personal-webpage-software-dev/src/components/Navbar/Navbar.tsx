import React, { useState } from "react";
import styles from './Navbar.module.css';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation('Navbar');

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
                        <li><a href="#about">{t('about')}</a></li>
                        <li><a href="#education">{t('education')}</a></li>
                        <li><a href="#experience">{t('experience')}</a></li>
                        <li><a href="#projects">{t('projects')}</a></li>
                        <li><a href="#contact">{t('contact')}</a></li>
                        <li><LanguageSwitcher /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;