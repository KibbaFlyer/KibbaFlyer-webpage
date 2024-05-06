import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={"../../../assets/about/memoji.png"} 
                alt="Memoji of me with a computer" 
                className={styles.imageBig}/>
                <ul className={styles.items}>
                <li className={styles.aboutItem}>
                        <img 
                        src={"../../../assets/about/crane.png"} 
                        alt="Cursor" 
                        className={styles.image}/>
                        <div>
                            <h3>Background</h3>
                            <p>
                                My background is in the construction industry, where I have worked as a technology manager and developer. 
                                There I developed a passion for technology and software development, 
                                and I am currently in the process of changing my career to software development.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={"../../../assets/about/frontend.png"} 
                        alt="Cursor" 
                        className={styles.image}/>
                        <div>
                            <h3>Frontend</h3>
                            <p>
                                I am developing applications with React and TypeScript, and have experience connecting external services to my applications. 
                                I leverage current tools and technologies to efectively create modern and responsive applications. <br/><br/>
                                I have experience in hosting these applications on Azure and AWS.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={"../../../assets/about/server.png"} 
                        alt="Backend" 
                        className={styles.image}/>
                        <div>
                            <h3>Backend</h3>
                            <p>
                                I also develop backend services, APIs, and databases to authenticate, run business logic, and securely send data to frontend applications.
                                My experience is primarily in Node.js and ASP.NET Core.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={"../../../assets/about/lowcode.png"} 
                        alt="UI" 
                        className={styles.image}/>
                        <div>
                            <h3>Low Code</h3>
                            <p>
                                I have experience in developing applications on low code platforms such as Power Automate and Dynamo for Revit. In order to provide quick and powerful business value at a low cost.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;