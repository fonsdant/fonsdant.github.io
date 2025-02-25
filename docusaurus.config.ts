import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  baseUrl: '/',
  favicon: 'img/laptop/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'fonsdant',
  presets: [
    [
      'classic',
      {
        docs: {
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineAuthors: 'warn',
          onInlineTags: 'warn',
          onUntruncatedBlogPosts: 'warn',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  projectName: 'fonsdant.github.io',
  themeConfig: {
    navbar: {
      items: [
        {
          label: 'tutorial',
          position: 'left',
          sidebarId: 'tutorialSidebar',
          type: 'docSidebar',
        },
        { 
          label: 'blog',
          position: 'left',
          to: '/blog'
        },
      ],
      title: 'fonsdant',
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
  title: 'fonsdant',
  trailingSlash: false,
  url: 'https://fonsdant.github.io',
};

export default config;
