import styles from './Intro.module.css';

const Intro = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi there, I am Kibba</h1>
                <p className={styles.description}>
                    I am a software developer with a passion and drive to help people. <br/>
                    My background is in engineering and I am currently studying to become a full stack developer.
                </p>
                <a href="mailto:kristoffer.flygare@icloud.com" className={styles.contact}>Contact me</a>
            </div>
            <img className={styles.image} src={"../../../public/assets/intro/memoji.png"} alt="Memoji of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}

export default Intro;