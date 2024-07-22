import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import img from "../About/Meet.jpeg";

import pdf from "../About/Meet.pdf";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={img}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Motivated and detail-oriented B.Tech student with a strong
                academic background in Information Technology.Possessing
                excellent problem- solving and analytical skills as well as
                ability to work well in a team with a strong work ethic and a
                positive attitude, I am eager to apply my knowledge and skills
                to make a valuable to make contribution in your organisation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <a
                href={pdf}
                target="blank"
                download={"Resume"}
                className={styles.download}
              >
                <p> Download Resume </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
