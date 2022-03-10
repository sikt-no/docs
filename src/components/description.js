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
        <p>Sikt utvikler, anskaffer og leverer fellestjenester til utdanning og forskning. I Sikt Docs finner du sider som inneholder tekniske detaljer for fellesløsningene, som for eksempel integrasjonspunkter og illustrasjoner av teknisk arkitektur. Informasjon om våre tjenester vil i en overgangsperiode fortsatt ligge på de gamle nettsidene: <a href="https://unit.no">unit.no</a>, <a href="https://uninett.no">uninett.no</a> og <a href="https://nsd.no">nsd.no</a>. Mer informasjon om våre tjenester finnes i <a href="https://sikt.no/tjenesteoversikt">tjenesteoversikten</a>.</p>
      </div>
    </header>
  );
}