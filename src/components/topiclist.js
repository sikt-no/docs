import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './topiclist.module.css';
import Description from './description';
import ThemedImage from '@theme/ThemedImage';

export function Topic({ title, link, imageUrl, children }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.topic}>
      <div className={styles.topicImage}>
        {imageUrl ? <img src={imgUrl} alt={title} /> : 
          <ThemedImage
            alt="Placeholder image"
            sources={{
              light: useBaseUrl('/img/placeholder_light.svg'),
              dark: useBaseUrl('/img/placeholder_dark.svg'),
            }}
          /> }
      </div>
      <div className={styles.topicContent}>
        <h3><Link to={useBaseUrl(link)}>{title}</Link></h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
Topic.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export function TopicList({ children }) {
  return (
    <Layout>
      <main>
        <Description />
        <section className={styles.features}>
          <div className="container">
            <div className={styles.topics}>
              {children}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
TopicList.propTypes = {
  children: PropTypes.element.isRequired,
};
