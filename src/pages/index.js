import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HotLinks from '../components/HotLinks'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to the {siteConfig.title} Docs</h1>
        <HomepageFeatures />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Documentation for users and developers on the Solace Decentralized Coverage Protocol">
      <HomepageHeader />
      <main>
        <HotLinks />
      </main>
    </Layout>
  );
}
