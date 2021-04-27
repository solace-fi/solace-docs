/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Solace',
  tagline: 'Documentation and Guides',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Solace', // Usually your GitHub org/user name.
  projectName: 'Solace-docs', // Usually your repo name.
  themeConfig: {
    // prism: {
    //   additionalLanguages: ["solidity"],
    // },
    navbar: {
      title: 'Solace Documentation',
      logo: {
        alt: 'Solace Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   label: "Concepts",
        //   to: "docs/concepts/concepts",
        //   position: "right",
        // },
        {
          label: "Contracts",
          to: "docs/contracts/contracts",
          position: "right",
        },
        {
          label: "Website",
          to: "https://www.solace.fi",
          position: "right",
        },
        {
          label: 'Whitepaper',
          href: 'https://app.box.com/s/k75yg40rffq28at6wfhiebni5falo4uy',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/solace-fi/core',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `unlicensed`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/solace-fi/solace-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
