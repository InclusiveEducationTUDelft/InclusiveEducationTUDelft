import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [tipsData, setTipsData] = useState(["Loading..."]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data/tip_of_the_day.json");
      const data = await response.json();
      setTipsData(data);
    }

    fetchData();
  }, []);

  const getTodaysTip = () => {
    const today = new Date();
    const day = today.getDate();
    return tipsData[(day - 1) % tipsData.length];
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.tipOfDay}>Tip of the day</h2>
        <p className={styles.tipText}>"{getTodaysTip()}"</p>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ca0c3989a0c76d897843af898a2821e1355d234cf203a01ca4f95ae01074ff?apiKey=91547a0531724dfdbec3493d0aeb27e5&" alt="Illustration of inclusive education" className={styles.heroImage} />
    </section>
  );
};

export default Hero;