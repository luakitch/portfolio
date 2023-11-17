import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img src={getImageUrl("about/aboutImage.png")} alt="" className={styles.aboutImage} /> */}
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
          <div className={styles.aboutItemtext}>
            <h3>Frontend Developer</h3>
            <p>
              Experienced in crafting responsive and visually appealing user
              interfaces using HTML5, CSS3, modern JavaScript frameworks such as
              React.js, and FileMaker Pro. Committed to creating intuitive and
              engaging user experiences.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
          <div className={styles.aboutItemtext}>
            <h3>Backend Developer</h3>
            <p>
              Experienced in designing and implementing database architectures
              using relational (MySQL, FileMaker Pro) and NoSQL databases
              (MongoDB).
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemtext}>
            <h3>UI/UX Design</h3>
            <p>
              Experienced in creating interactive prototypes with Figma and
              employing user-centered design principles to create interfaces
              that prioritize the needs and behaviors of the end user.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
