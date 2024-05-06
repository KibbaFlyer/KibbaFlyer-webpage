import styles from './Education.module.css';
import educations from "../../data/education.json";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educations}>
        {educations.sort((a, b) => b.startDate.localeCompare(a.startDate)).map((education, id) => {
            return (
              <li key={id} className={styles.education}>
                <div className={styles.educationDetails}>
                  <h3>{`${education.educationName}, ${education.school}`}</h3>
                  <p>{`${education.startDate} - ${education.endDate}`}</p>
                  <ul>
                    {education.courses.map((courses, id) => {
                      return <li key={id}>{courses}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Education;
