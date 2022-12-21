import React from 'react';
import clsx from 'clsx';
import styles from './description.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Description() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('description title', styles.description)}>
      <div className="container">
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <p>Mer informasjon om våre tjenester finnes i <a href="https://sikt.no/tjenesteoversikt">tjenesteoversikten</a>.</p>
      </div>
    </header>
  );
}