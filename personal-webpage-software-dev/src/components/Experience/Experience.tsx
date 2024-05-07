import styles from './Experience.module.css';
import skills from "../../data/skills.json";
import historyData from "../../data/history.json";
import { useTranslation } from 'react-i18next';

interface History {
  role: {
    [key: string]: string;
  };
  organisation: string,
  startDate: string;
  endDate: {
    [key: string]: string;
  };
  experiences: {
    [key: string]: string[];
  };
  imageSrc?: string;
}

const history: History[] = historyData as unknown as History[];

const Experience = () => {
  const { t } = useTranslation('Experience');
  const currentLanguage = localStorage.getItem('i18nextLng') || 'en';

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experience')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.sort((a, b) => a.title.localeCompare(b.title)).map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role[currentLanguage]}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate[currentLanguage]}`}</p>
                  <ul>
                    {historyItem.experiences[currentLanguage].map((experience, id) => {
                      return <li key={id}>{experience}</li>;
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

export default Experience;
