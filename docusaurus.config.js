// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TARDIS Plugin Docs',
  tagline: 'It’s bigger on the inside',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eccentricdevotion.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eccentricdevotion', // Usually your GitHub org/user name.
  projectName: 'TARDIS', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Chew/TARDIS-Docs/tree/master/',

          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TARDIS',
        items: [
            // dropdown
          {
            type: 'dropdown',
            label: 'First Things First',
            items: [
              {
                label: 'Getting Started/Installation',
                to: 'installation-v5',
              },
              {
                label: 'Creating a TARDIS',
                to: 'creating-a-tardis',
              },
              {
                label: 'Companions',
                to: 'companions',
              },
              {
                label: 'Artron Energy',
                to: 'artron-energy',
              },
              {
                label: 'Enter and Exit',
                to: 'enter-and-exit',
              },
              {
                label: 'Removing a TARDIS',
                to: 'removing-a-tardis',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Time Travelling',
            items: [
              {
                label: 'Time Travel',
                to: 'time-travel',
              },
              {
                label: 'Advanced TARIDS Console',
                to: 'advanced-console',
              },
              {
                label: 'TARDIS Keyboard',
                to: 'keyboard',
              },
              {
                label: 'TARDIS Malfunctions',
                to: 'malfunction',
              }
            ]
          },
          {
            type: 'doc',
            docId: 'faqs',
            position: 'left',
            label: "FAQ"
          },
          {
            href: 'https://github.com/eccentricdevotion/TARDIS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
            ],
          },
          {
            title: "Downloads",
            items: [
              {
                label: "Jenkins",
                href: "http://tardisjenkins.duckdns.org:8080/job/TARDIS/",
              },
              {
                label: "GitHub Releases",
                href: "https://github.com/eccentricdevotion/TARDIS/releases",
              },
              {
                label: "Spigot",
                href: "https://www.spigotmc.org/resources/tardis.19931/",
              },
              {
                label: "Modrinth",
                href: "https://modrinth.com/mod/tardis",
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sfuPVHh',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eccentricdevotion and Contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ["java"],

      },
    }),

  plugins: [
      require.resolve('docusaurus-lunr-search'),
    [
        '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/chemistry-lab/products',
            from: '/chemistry-lab-products',
          },
          // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
      },
    ]
  ],
};

module.exports = config;
