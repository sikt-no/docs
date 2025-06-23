// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sikt teknisk dokumentasjon',
  tagline: 'Teknisk dokumentasjon på løsningene Sikt leverer for utdanning og forskning.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.sikt.no/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'sikt-no',
  projectName: 'docs.sikt.no',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl:
            'https://github.com/sikt-no/docs/tree/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
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

export default config;
