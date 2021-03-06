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
  plugins: [require.resolve('docusaurus-lunr-search')],
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
        src: 'img/solace-circle-small-color.svg',
      },
      items: [
        {
          label: "Website",
          to: "https://www.solace.fi",
          position: "left",
        },
        {
          label: "Welcome",
          to: "docs/welcome-to-solace-docs",
          position: "right",
        },
        {
          label: "Overview",
          to: "docs/overview/start-here",
          position: "right",
        },
        {
          label: "FAQ",
          to: "docs/overview/faq/solace-the-fundamentals",
          position: "right",
        },
        {
          label: "User Guides",
          to: "docs/user-guides/intro",
          position: "right",
        },
        {
          label: "Architecture",
          to: "docs/architecture/intro",
          position: "right",
        },
        {
          label: "Developer Docs",
          to: "docs/dev-docs/intro",
          position: "right",
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
            },
            {
              label: 'Medium',
              to: 'https://medium.com/solace-fi'
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
