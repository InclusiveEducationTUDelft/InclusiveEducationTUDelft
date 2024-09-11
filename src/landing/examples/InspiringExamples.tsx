import React, { useEffect, useState } from 'react';
import styles from './InspiringExamples.module.css';
import { useNavigate } from 'react-router-dom';
import { fetchAndProcessMarkdown, fetchTitleAndContent } from '../../example/ExamplePage';
import Example from '../../example/Example';

const examples_list = [
  "lena-image-processing",
  "names-cryptography",
  "hotel-vs-cargo",
]

const InspiringExamples: React.FC = () => {
  const navigate = useNavigate();

  const [examplesData, setExamplesData] = useState<{ title: string, content: string, path: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const examples = [];
      for (const path of examples_list) {
        const markdown = await fetchAndProcessMarkdown(path);
        const { title, content } = fetchTitleAndContent(markdown);
        examples.push({ path, title, content, markdown });
      }
      setExamplesData(examples);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.inspiringExamples}>
      <h2 className={styles.sectionTitle}>Inspiring Ways to Make Your STEM Education Inclusive</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.exampleContainer}>
          {examplesData.map((example, index) => (
            <Example key={index} {...example} />
          ))}
        </div>
      )}
      <button className={styles.exploreMoreBtn} onClick={() => navigate("example")}>Explore More</button>
    </section >
  );
};

export default InspiringExamples;