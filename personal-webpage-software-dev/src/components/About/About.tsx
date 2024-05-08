import styles from './About.module.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('About');

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>{t("about")}</h2>
            <div className={styles.content}>
                <img
                    src={"../../../assets/about/memoji.png"}
                    alt="Memoji of me with a computer"
                    className={styles.imageBig} />
                <ul className={styles.items}>
                    <li className={styles.aboutItem}>
                        <img
                            src={"../../../assets/about/crane.png"}
                            alt="Cursor"
                            className={styles.image} />
                        <div>
                            <h3>{t('background')}</h3>
                            <p>
                                {t('backgroundText')}
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={"../../../assets/about/frontend.png"}
                            alt="Cursor"
                            className={styles.image} />
                        <div>
                            <h3>{t('frontend')}</h3>
                            <p>
                                {t('frontendText')}
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={"../../../assets/about/server.png"}
                            alt="Backend"
                            className={styles.image} />
                        <div>
                            <h3>{t('backend')}</h3>
                            <p>
                                {t('backendText')}
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={"../../../assets/about/lowcode.png"}
                            alt="UI"
                            className={styles.image} />
                        <div>
                            <h3>{t('lowcode')}</h3>
                            <p>
                                {t('lowcodeText')}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;