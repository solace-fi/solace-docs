import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'What is Solace',
    link: 'https://www.solace.fi',
    description: (
      <>
        Learn about what the Solace Protocol is about.
      </>
    ),
  },
  {
    title: 'Smart contract overview',
    link: 'docs/contracts/contracts',
    description: (
      <>
        Learn about the architecture of the Solace smart contracts.
      </>
    ),
  },
  {
    title: 'Front End Development',
    link: 'docs/frontend/getting-started',
    description: (
      <>
        Learn about the user interface that gives the protocol its appearance.
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
          <h3>{title}</h3>
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
