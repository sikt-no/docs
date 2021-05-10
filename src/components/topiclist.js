import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './topiclist.module.css';

export function Topic({ title, link, imageUrl, children }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.topic}>
      <div className={styles.topicImage}>
        <img src={imgUrl} alt={title} />
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
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export function TopicList({ children }) {
  return (
    <Layout>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div>Vi jobber med å etablere docs.uninett.no for å samle teknisk dokumentasjon for Uninetts tjenester. Det vil ta litt tid før all dokumentasjonen er etablert og samlet. Gi gjerne tilbakemelding til <a href="mailto:kontakt@uninett.no">kontakt@uninett.no</a> om disse sidene. </div>
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
