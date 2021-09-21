/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Solace Decentralized Coverage Protocol',
  url: 'https://docs.solace.fi',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Solace', // Usually your GitHub org/user name.
  projectName: 'Solace-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    // prism: {
    //   additionalLanguages: ["solidity"],
    // },
    navbar: {
      title: 'Solace Docs',
      logo: {
        alt: 'Solace Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: "Website",
          to: "https://www.solace.fi",
          position: "left",
        },
        {
          label: "App",
          to: "https://rinkeby.solace.fi",
          position: "left",
        },
        {
          label: "Overview",
          to: "docs/overview/what-is-solace",
          position: "right",
        },
        {
          label: "Protocol",
          to: "docs/protocol/intro",
          position: "right",
        },
        {
          label: "User Guides",
          to: "docs/user-guides/intro",
          position: "right",
        },
        {
          label: "Developer Docs",
          to: "docs/dev-docs/intro",
          position: "right",
        },
        {
          label: 'Whitepaper',
          href: 'https://whitepaper.solace.fi/',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/solace-fi',
          position: 'right',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Solace',
          items: [
            {
              label: "Website",
              to: "https://www.solace.fi",
            },
            {
              label: "App",
              to: "https://rinkeby.solace.fi",
            },
            {
              label: 'Whitepaper',
              href: 'https://whitepaper.solace.fi/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/solace-fi',
            }
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: "User Guides",
              to: "docs/user-guides/intro",
            },
            {
              label: "Developer Docs",
              to: "docs/dev-docs/intro",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              to: 'https://www.linkedin.com/company/solace-labs/about/'
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/solacefi'
            },
            {
              label: 'Discord',
              to: 'https://discord.com/invite/7v8qsyepfu'
            }
          ],
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/solace-fi/solace-docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
