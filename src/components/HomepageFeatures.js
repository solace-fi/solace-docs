import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'How to Buy Coverage',
    link: 'docs/user-guides/buy-cover',
    description: (
      <>
        How to get started on buying coverage for your assets.
      </>
    ),
  },
  {
    title: 'User Guides',
    link: 'docs/user-guides/intro',
    description: (
      <>
        Dive deeper into the many other ways of using the Solace Protocol.
      </>
    ),
  },
  {
    title: 'Developer Docs',
    link: 'docs/dev-docs/intro',
    description: (
      <>
        Documentation about the protocol's codebase and smart contracts.
      </>
    ),
  },
];

function Feature({title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} style={{ textDecoration: 'none' }}>
      <div className={styles.feature}>
        <div className="text--center padding-horiz--md">
          <h4 className={styles.feature__title}>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
