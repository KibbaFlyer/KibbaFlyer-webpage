import styles from './Projects.module.css';
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.projects}>
          {projects.sort((a, b) => a.title.localeCompare(b.title)).map((project, id) => {
            return (
              <li key={id} className={styles.project}>
                <div className={styles.projectDetails}>
                  {project.imageSrc != null && <img
                    src={project.imageSrc}
                    alt={`${project.title} Logo`}
                  />}
                  {project.imageSrc == null && <div
                  />}
                  <h3>{`${project.title}`}</h3>
                  <p>{`${project.description}`}</p>
                  <ul>
                  {project.skills.sort((a, b) => a.localeCompare(b)).map((skill, id) => {
                      return <li key={id}>{skill}</li>;
                    })}
                  </ul>
                  <div className={styles.linkDiv}>
                    <a href={project.demo}>
                      {project.demo != null && <button>Demo</button>}
                    </a>
                    <a href={project.source}>
                      {project.source != null && <button>Source</button>}
                    </a>
                  </div>
                </div>
                
              </li>
              
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects
