// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import {buildRedirects, buildRedirectsFile} from "./redirects";
import {Config, ThemeConfig} from "@docusaurus/types";
import {Options} from "@docusaurus/preset-classic";

const config: Config = {
  title: 'TARDIS Plugin Docs',
  tagline: 'It’s bigger on the inside',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tardis.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eccentricdevotion', // Usually your GitHub org/user name.
  projectName: 'TARDIS', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

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
      }) satisfies Options,
    ] ,
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
            type: 'doc',
            docId: 'installation-v5',
            position: 'left',
            label: "Installation"
          },
          {
            label: "Downloads",
            to: "download",
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'site-map',
            position: 'left',
            label: "Site Map"
          },
          {
            href: 'https://github.com/eccentricdevotion/TARDIS/issues/new/choose',
            label: 'Issues',
            position: 'left',
          },
          {
            href: 'https://github.com/eccentricdevotion/TARDIS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
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
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ["java"],
      },
	  themeConfig: {
		colorMode: {
		  defaultMode: 'dark',
		  disableSwitch: false,
		  respectPrefersColorScheme: false,
		},
	  } satisfies ThemeConfig,
    }),

  plugins: [
      require.resolve('docusaurus-lunr-search'),
    ['@docusaurus/plugin-client-redirects', {
      fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
      // We build this from the redirects.js file, edit that!
      redirects: buildRedirects(),
    }],
    // Cloudflare pages supports redirects!
    // @ts-ignore
//     () => ({
//       postBuild() {
//         buildRedirectsFile();
//       },
//     })
  ],
};

export default config;
