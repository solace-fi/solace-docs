import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const HeroFeatureList = [
  {
    title: 'Buy Coverage',
    link: 'docs/user-guides/buy-cover',
    description: (
      <>
        Learn how to buy coverage for your assets.
      </>
    ),
  },
  {
    title: 'Stake and Bond',
    link: 'docs/user-guides/buy-token',
    description: (
      <>
        Learn how to buy Solace token at a discount.
      </>
    ),
  },
]

const FeatureList = [
  {
    title: 'What is Solace',
    link: 'docs/overview/faq/solace-the-fundamentals',
    description: (
      <>
        What is Solace and its role in decentralized finance ecosystems?
      </>
    ),
  },
  {
    title: 'Protocol Architecture',
    link: 'docs/architecture/intro',
    description: (
      <>
        Read about the protocol's design, components, and other features.
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

function HeroFeature({title, link, description}) {
  return (
      <Link to={link} style={{ textDecoration: 'none' }}>
      <div className={styles.hero__feature}>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.hero__feature__title}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      </Link>
  );
}

function Feature({title, link, description}) {
  return (
      <Link to={link} style={{ textDecoration: 'none' }}>
      <div className={styles.feature}>
        <div className="text--center padding-horiz--md">
          <h4 className={styles.feature__title}>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
    <div className="container">
      <div className="row">
        {HeroFeatureList.map((props, idx) => (
          <div className={clsx('col col--6')}>
            <HeroFeature key={idx} {...props} />
          </div>
        ))}
      </div>
    </div>
  </section>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            {FeatureList.map((props, idx) => (
              <div className={clsx('col col--3')}>
                <Feature key={idx} {...props} />
              </div>
            ))}
        </div>
      </div>
    </section>
    </>
  );
}
