// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sikt teknisk dokumentasjon',
  tagline: 'Teknisk dokumentasjon på løsningene Sikt leverer for utdanning og forskning.',
  url: 'https://docs.sikt.no/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sikt-no',
  projectName: 'docs.sikt.no',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sikt-no/docs/tree/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'teknisk dokumentasjon',
        logo: {
          alt: 'Sikt logo',
          src: 'img/sikt_logo.svg',
          srcDark: 'img/sikt_logo_white.svg',
        },
      },
      footer: {
        logo: {
          alt: 'Sikt Logo',
          src: 'img/sikt_logo_white.svg',
          width: 104,
          height: 28,
        },
        style: 'dark',
        links: [
          {
            title: 'Sikt Docs',
            items: [
              {
                html: '<p>Teknisk dokumentasjon på fellesløsningene Sikt leverer for utdanning og forskning.</p>',
              },
            ],
          },
          {
            title: 'Hvordan bidra?',
            items: [
              {
                label: 'Endre innholdet fra nettleseren',
                to: 'https://github.com/sikt-no/docs#editing-the-site-directly-from-the-web-browser',
              },
              {
                label: 'Endre innholdet lokalt',
                to: 'https://github.com/sikt-no/docs#editing-the-site-locally',
              },
              {
                label: 'Opprette en issue i GitHub',
                to: 'https://github.com/sikt-no/docs/issues',
              },
            ],
          },
          {
            title: 'Kontaktinformasjon',
            items: [
              {
                label: 'Kontakt oss',
                to: 'https://sikt.no/kontakt-oss',
              },
              {
                label: 'Om Sikt',
                to: 'https://sikt.no/om-sikt',
              },
              {
                label: 'Personvernerklæring',
                to: 'https://sikt.no/personvernerklaering',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sikt – Kunnskapssektorens tjenesteleverandør`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
    }),
    
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],
};

module.exports = config;
