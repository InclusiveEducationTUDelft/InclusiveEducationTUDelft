import React, { useEffect, useState } from 'react';
import styles from './InclusiveTips.module.css';
import { fetchAndProcessMarkdown, fetchTitleAndContent, TipType } from '../../tips/TipPage';
import Tip from '../../tips/Tip';
import InclusiveButton from '../../misc/inclusive-button/InclusiveButton';

const tipsList = [
  "pronouns",
  "people-things",
  "gendered-names-representation"
];

const InclusiveTips: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tipsData, setTipsData] = useState<{ title: string, content: string, tipType: TipType, redirect: string, path: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tips = [];
      for (const path of tipsList) {
        const markdown = await fetchAndProcessMarkdown(path);
        const { title, content, tipType, redirect } = fetchTitleAndContent(markdown);
        tips.push({ path, title, content, tipType, redirect, markdown });
      }
      setTipsData(tips);
      setIsLoading(false);
    };

    fetchData();
  }, [tipsList]);

  return (
    <section className={styles.inclusiveTips} id="tips-section">
      <h2 className={styles.sectionTitle}>How you can make your education more inclusive</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.tipContainer}>
          {tipsData.map((example, index) => (
            <Tip key={index} {...example} />
          ))}
        </div>
      )}
      <InclusiveButton href="#tips" text="Explore More" alignSelf='center' marginTop="4%" />
    </section>
  );
};

export default InclusiveTips;