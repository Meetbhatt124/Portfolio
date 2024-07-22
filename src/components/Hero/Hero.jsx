import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import img from "../Hero/Meet.jpeg"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Meet Bhatt</h1>
        <p className={styles.description}>
          I'm a Undergraduate in the field of Information Technology and Frontened Developer. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:meetbhatt.it25@jecrc.ac.in"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={img}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
