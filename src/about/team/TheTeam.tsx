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

    pronouns: "She/Her",

    bio: "Shirley de Wit is a PhD student at Centre for Education and Learning, TU Delft. With her work, she wants to contribute to more (knowledge on) women in Computer Science. She focuses on primary and secondary school children and topics include stereotypes, interests, and programming materials and languages.",

    imgSrc: "/team/Shirley.png",

  },

  {

    name: "Jorge Martinez Castaneda",

    pronouns: "He/Him",

    bio: "Jorge Martinez Castaneda is an Assistant Professor in Intelligent Systems (INSY). Apart from being an educator and a scientist he considers himself an idealist and feminist, dreaming and striving at making education and science accessible and inclusive for everyone.",

    imgSrc: "/team/Jorge.png",

  },

  {

    name: "Sanne Alblas",

    pronouns: "She/Her",

    bio: "Sanne Alblas works as Officer at the EEMCS Faculty Graduate School. Next to this she is a Boardmember of DiversAbility, a new TU Employee Resource Group. She strongly believes that to make EEMCS as diverse, inclusive and socially safe as possible everyone needs to feel and take responsibility. With her role within EDIT she wants to make sure this happens.",

    imgSrc: "/team/Sanne.png",

  },

  {

    name: "Efthimia Aivaloglou",

    pronouns: "She/Her",

    bio: "Efthimia Aivaloglou is an Assistant Professor at the Center for Education and Learning. Her research focuses on computing education, and specifically on collaborative practices in programming education, data science education, informal and lifelong education, gender representation and computing identity.",

    imgSrc: "/team/Efthimia.png",

  },

  {

    name: "Hanno Van Keulen",

    pronouns: "He/Him",

    bio: "Hanno van Keulen started his career in chemistry and quickly became interested in teaching and learning by teaching chemistry students.As of February 2022, he works at Delft University of Technology, as Director of Studies of the MSc Science Education & Communication, the University Teacher Training Program of TU Delft.",

    imgSrc: "/team/Hanno.png",

  },

  {

    name: "Ajay Jagadeesh",

    pronouns: "He/Him",

    bio: "A queer educator, he is a passionate and innovative advocate for integrating social sciences and humanities into engineering education. Dedicated to creating a more equitable future, he believes in bridging disciplines to empower students and foster inclusivity in the STEM field. His work champions diversity and transformative learning.",

    imgSrc: "/team/Ajay.png",

  },

  {

    name: "Anandini Jayanthi",

    pronouns: "She/Her",

    bio: "Anandini Sravya Jayanthi is a second-year international PhD candidate who believes that diverse minds in STEM will strengthen science and facilitate growth. She identifies as a woman (she/her) and hopes to help build an inclusive workspace",

    imgSrc: "/team/Anandini.png",

  },

  {

    name: "Nina Immig",

    pronouns: "She/Her",

    bio: "Nina is a Computer Science graduate and currently pursuing a Master in Management of Technology. With experience in the faculty-student council and serving as a confidential mentor at CH (EEMCS), Nina is passionate about inclusivity in education. She enjoys creative hobbies, such as crocheting, and spending time with friends.",

    imgSrc: "/team/Nina.png",

  },

  {

    name: "Alex Despan",

    pronouns: "He/Him",

    bio: "Motorcycle enthusiast!",

    imgSrc: "/team/Alex.png",

  },

  {

    name: "Sejal Budholiya",

    pronouns: "She/Her",

    bio: "Sejal Budholiya is a Strategic Product Design student at TU Delft. As a designer, she wants to make design for the invsible, visible and aims to craft impact focused strategies to transcend boundaries in society",

    imgSrc: "/team/Sejal.png",

  },

  {

    name: "Lyssia van der Kooi",

    pronouns: "She/Her",

    bio: "Lyssia is an aerospace engineering student passionate about raising awareness and making a change in diversity and inclusion in her field.",

    imgSrc: "/team/Lyssia.png",

  },

  {

    name: "Julian van Ham",

    pronouns: "He/Him",

    bio: "Bachelor electrical engineering",

    imgSrc: "/team/Julian.png",

  },

  {

    name: "Amna Ahmad",

    pronouns: "She/Her",

    bio: "Amna is an Applied Mathematics master student and has mainly been working on the content side of the platform.",

    imgSrc: "/team/Amna.png",

  },

  {
    name: "Isabelle El-Hajj",

    pronouns: "She/Her",

    bio: "Isabelle El-Hajj is a Ph.D. student in the Control and Simulation group at the Faculty of Aerospace Engineering at TU Delft. She is also part of the Diversity and Inclusion Team at the Aerospace Engineering faculty, where she works to help create a safe, inclusive, and supportive environment for all students. Isabelle hopes that all students regardless of background or identity can feel confident and prepared to succeed, both during their studies and in their future careers.",

    imgSrc: "/team/Isabelle.png",

  },

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
            imgSrc={"." + member.imgSrc}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TheTeam;