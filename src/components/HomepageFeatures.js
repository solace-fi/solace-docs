import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'User Docs',
    link: 'docs/user-docs/intro',
    description: (
      <>
        Learn about the different roles as a user of the Solace protocol.
      </>
    ),
  },
  {
    title: 'Developer Docs',
    link: 'docs/dev-docs/capital-management',
    description: (
      <>
        Learn about the architecture of the Solace protocol and its development.
      </>
    ),
  },
];

function Feature({title, link, description}) {
  return (
    <div className={clsx('col col--6')}>
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
