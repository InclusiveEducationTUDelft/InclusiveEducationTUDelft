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
    imgSrc: "./team/Shirley.png",
  },
  {
    name: "Jorge Martinez Castaneda",
    pronouns: "He/Him",
    bio: "Jorge Martinez Castaneda is an Assistant Professor in Intelligent Systems (INSY). Apart from being an educator and a scientist he considers himself an idealist and feminist, dreaming and striving at making education and science accessible and inclusive for everyone.",
    imgSrc: "./team/Jorge.png",
  },
  {
    name: "Sanne Alblas",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Sanne.png",
  },
  {
    name: "Efthimia Aivaloglou",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Efthimia.png",
  },
  {
    name: "Hanno Van Keulen",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Hanno.png",
  },
  {
    name: "Ajay Jagadeesh",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Ajay.png",
  },
  {
    name: "Anandini Jayanthi",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Anandini.png",
  },
  {
    name: "Nina",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Nina.png",
  },
  {
    name: "Alex Despan",
    pronouns: "He/Him",
    bio: "",
    imgSrc: "./team/Alex.png",
  },
  {
    name: "Sejal Budholiya",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Sejal.png",
  },
  {
    name: "Lyssia",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Lyssia.png",
  },
  {
    name: "Julian",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Julian.png",
  },
  {
    name: "Amna",
    pronouns: "",
    bio: "",
    imgSrc: "./team/Amna.png",
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