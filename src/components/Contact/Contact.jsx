import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import img from "../Contact/gmail.png";
import link from "../Contact/linkedin.png";
import git from "../Contact/github.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={img} alt="Email icon" />
          <a href="mailto:meetbhatt.it25@jecrc.ac.in" target="blank">
            meetbhatt.it25@jecrc.ac.in
          </a>
        </li>
        <li className={styles.link}>
          <img src={link} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/meet-bhatt-0b2160226/"
            target="blank"
          >
          Meet Bhatt
          </a>
        </li>
        <li className={styles.link}>
          <img src={git} alt="Github icon" />
          <a href="https://www.github.com/manan13https://github.com/Meetbhatt124" target="blank">
            Meet124
          </a>
        </li>
      </ul>
    </footer>
  );
};
