import React from "react";
import styles from "./TheProject.module.css";

const TheProject: React.FC = () => (
  <section className={styles.sectionYellow}>
    <div className={styles.projectWrapper}>
      <h2 className={styles.sectionTitle}>The Project</h2>
      <div className={styles.textImageWrapper}>
        <div className={styles.column}>
          <div className={styles.sectionDescription}>
            {" "}
            The{" "}
            <span style={{ fontWeight: 600 }}>
              Towards Open Inclusive STEM Education
            </span>{" "}
            project aims to make science, technology, engineering, and
            mathematics (STEM) education more
            inclusive and accessible to all. We recognize that fostering
            diversity and inclusion in education is essential to empowering
            future generations of innovators and problem-solvers.
            <br />
            <br />
            Our approach centers around three main activities:
            <br />
            <ol>
              <li>
                <span
                  style={{
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  Creating Open-Source Educational Resources.
                </span>{" "}
                We develop and disseminate materials that explain what inclusive
                STEM education is, why it is crucial, and how it can be
                implemented effectively. These resources are freely available to
                educators, enabling them to integrate inclusive practices into
                their teaching.
              </li>
              <li>
                <span
                  style={{
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  Documenting and Sharing Best Practices.
                </span>{" "}
                We identify and document successful examples of open and
                inclusive STEM education. These practices, drawn from diverse
                educational settings, are shared with the broader teaching
                community, offering practical tools and strategies that can be
                adapted and reused in various contexts.
              </li>
              <li>
                <span
                  style={{
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  Educating and Training Teaching Staff.
                </span>{" "}
                We provide training sessions for educators on selecting and
                using open inclusive educational resources. These sessions also
                encourage educators to share their own experiences and examples,
                fostering a collaborative approach to creating more inclusive
                learning environments.
              </li>
            </ol>
            <br />
            This project is funded by the{" "} 
            <span style={{ fontWeight: 600 }}>
              <a href="https://www.tudelft.nl/en/open-science/about" target="_blank">TU Delft Open Science programme</a>
            </span>{" "}
            , which places a strong emphasis on Open Education as a key pillar.
            Open Education at TU Delft integrates educational innovations such
            as digital technologies, blended learning, and increased student
            autonomy with the core values of diversity and inclusion.
          </div>
        </div>
        <div className={styles.column}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bab21d2f26056e5fa71733ffd43dfa11fee1eca2f9841a8b46ae6b9be34bbec?apiKey=91547a0531724dfdbec3493d0aeb27e5&"
            alt="Towards Open Inclusive STEM Education project"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  </section>
);
export default TheProject;