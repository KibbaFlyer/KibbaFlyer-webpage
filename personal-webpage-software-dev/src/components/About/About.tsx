import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={"../../../public/assets/about/memoji.png"} 
                alt="Memoji of me with a computer" 
                className={styles.imageBig}/>
                <ul className={styles.items}>
                    <li className={styles.aboutItem}>
                        <img 
                        src={"../../../public/assets/about/cursor.png"} 
                        alt="Cursor" 
                        className={styles.image}/>
                        <div>
                            <h3>Frontend</h3>
                            <p>
                                I am developing applications with React and TypeScript, and have experience connecting external services.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={"../../../public/assets/about/backend.png"} 
                        alt="Backend" 
                        className={styles.image}/>
                        <div>
                            <h3>Backend</h3>
                            <p>
                                I am developing backend services, APIs, and databases.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={"../../../public/assets/about/ui.png"} 
                        alt="UI" 
                        className={styles.image}/>
                        <div>
                            <h3>Low Code</h3>
                            <p>
                                I have experience in developing applications on low code platforms. In order to provide quick and powerful business value
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;