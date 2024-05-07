import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.detailsDiv}>
        <div>
          <div className={styles.detailsSubDiv}>
            <img src="../../assets/contact/icons8-email-64.png"></img>
            <a href="mailto:kristoffer.flygare@gmail.com">kristoffer.flygare@gmail.com</a>
          </div>
          <div className={styles.detailsSubDiv}>
            <img src="../../assets/contact/icons8-linkedin-64.png"></img>
            <a href="https://www.linkedin.com/in/kristoffer-flygare-b43115b1/">https://www.linkedin.com/in/kristoffer-flygare-b43115b1/</a>
          </div>
          <div className={styles.detailsSubDiv}>
            <img src="../../assets/contact/icons8-github-64.png"></img>
            <a href="https://github.com/KibbaFlyer">https://github.com/KibbaFlyer</a>
          </div>
        </div>
        <div className={styles.infoDiv}>
          <p>90408 Nürnberg, Germany</p>
          <p>
            <a href="https://icons8.com">Icons provided by icons8.com</a>
          </p>
        </div>
      </div>
    </div>


  )
}

export default Contact;
