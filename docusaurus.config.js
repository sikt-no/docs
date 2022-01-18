/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Uninett technical documentation',
  tagline: 'Documentation for Uninett services',
  url: 'https://sikt-no.github.io',
  baseUrl: '/',
  projectName: 'sikt-no.github.io',
  organizationName: 'sikt-no',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Uninett dokumentajson',
      logo: {
        alt: 'Uninett',
        src: 'img/uninett_logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Uninett AS`,
    },
    colorMode: {
      disableSwitch: true,
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
            'https://scm.uninett.no/platon/docs-uninett-no/-/edit/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],
};
