import React from "react";
import styles from "./PersonCard.module.css";

interface PersonCardProps {
  name: string;
  pronouns: string;
  bio: string;
  imgSrc: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  pronouns,
  bio,
  imgSrc,
}) => (
  <div className={styles.personWrapper}>
    <div className={styles.personalInfo}>
      <div className={styles.name}>
        <span style={{ fontSize: "16px" }}>{name}</span>
        <br />
      </div>
      <div className={styles.heHim}>{pronouns}</div>
      <div className={styles.bio}>{bio}</div>
    </div>
    <div className={styles.imageContainer}>
      <img
        loading="lazy"
        src={imgSrc}
        alt={`${name}`}
        className={styles.img}
      />
    </div>
  </div>
);
export default PersonCard;