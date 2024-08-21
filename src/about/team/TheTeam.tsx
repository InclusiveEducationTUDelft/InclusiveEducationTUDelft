import React from "react";
import PersonCard from "./PersonCard";
import styles from "./TheTeam.module.css"

interface Person {
  name: string;
  pronouns: string;
  bio: string;
  imgSrc: string;
}

const teamMembers: Person[] = [
  {
    name: "Shirley De Wit",
    pronouns: "",
    bio: "",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Jorge Martinez Castaneda",
    pronouns: "He/Him",
    bio: "Jorge Martinez Castaneda is an Assistant Professor in Intelligent Systems (INSY). Apart from being an educator and a scientist he considers himself an idealist and feminist, dreaming and striving at making education and science accessible and inclusive for everyone.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Hanno Van Keulen",
    pronouns: "He/Him",
    bio: "Hanno Van Keulen contributes his expertise to fostering a diverse and inclusive educational environment.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Efthimia Aivaloglou",
    pronouns: "He/Him",
    bio: "Efthimia Aivaloglou is dedicated to promoting open and inclusive STEM education through her research and teaching.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Ajay Jagadeesh",
    pronouns: "He/Him",
    bio: "Ajay Jagadeesh focuses on innovative teaching approaches to enhance student engagement.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Isabelle El-Haji",
    pronouns: "He/Him",
    bio: "Isabelle El-Haji brings a wealth of knowledge in creating inclusive educational resources.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Nina Niro",
    pronouns: "He/Him",
    bio: "Nina Niro is committed to documenting and sharing best practices in inclusive education.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Sejal Budholiya",
    pronouns: "He/Him",
    bio: "Sejal Budholiya works on training educators to use open inclusive educational resources effectively.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Lyssia Samara",
    pronouns: "He/Him",
    bio: "Lyssia Samara collaborates to develop educational resources that integrate diversity and inclusion.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Julian",
    pronouns: "He/Him",
    bio: "Julian Afonso is passionate about making STEM education accessible to everyone.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  },
  {
    name: "Amna Ismail",
    pronouns: "He/Him",
    bio: "Amna Ismail advocates for increased student autonomy and inclusive practices in education.",
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bbdacaa8d975b745c0947f8e1923f89ecd90743fb4845750c618148b590f15?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
  }
];

const TheTeam: React.FC = () => (
  <section className={styles.teamSection}>
    <h2 className={styles.sectionTitle}>The Team</h2>
    <div className={styles.teamDescription}>
      The Towards Open Inclusive STEM Education project is driven by a dedicated
      team of educators, researchers, and students from TU Delft. Our team
      brings together expertise in STEM education, open science, and inclusive
      teaching practices. United by a shared commitment to diversity and
      accessibility in education, we collaborate closely to develop resources,
      document best practices, and train educators.
    </div>
    <div className={styles.teamWrapper}>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <PersonCard
            key={index}
            name={member.name}
            pronouns={member.pronouns}
            bio={member.bio}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TheTeam;