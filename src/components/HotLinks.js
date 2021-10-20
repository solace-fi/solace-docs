import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HotLinks.module.css';
import clsx from 'clsx';

import { Icon, InlineIcon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';

const HotLinkList = [
    {
        title: 'solace-fi/core',
        link: 'https://github.com/solace-fi/solace-core'
    },
    {
        title: 'solace-fi/client',
        link: 'https://github.com/solace-fi/solace-client'
    },
    {
        title: 'solace-fi/paclas',
        link: 'https://github.com/solace-fi/paclas'
    }
]

function HotLink({title, link}) {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className={styles.link}>
                <div className="row">
                    <InlineIcon icon={githubFill} width={25} height={25} />
                    <h4 style={{margin: '0', marginLeft: '1rem'}}>{title}</h4>
                </div>
            </div>
        </Link>
    )
}

export default function HotLinks () {
    return (
        <section className={styles.links}>
            <div className="container">
            <h3>Developer Links</h3>
            <p>The Solace codebase</p>
            <div className={clsx('col col--6')}>
                {HotLinkList.map((props, idx) => (
                    <>
                        <HotLink key={idx} {...props} />
                    </>
                ))}
                </div>
            </div>
        </section>
    )
}