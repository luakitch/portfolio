import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Luke</h1>
        <p className={styles.description}>
          I'm a full-stack web developer with a Bachelor's degree in Informatics
          and professional experience as an App Developer. Experienced in both
          front-end and back-end development, with a solid understanding of the
          entire web development process. Comfortable working with technologies
          such as HTML, CSS, JavaScript, and React.js.
        </p>
        <a className={styles.contactBtn} href="mailto:kitchel301@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage2.png")}
        alt="hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
 