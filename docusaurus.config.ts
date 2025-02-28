import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  baseUrl: '/',
  favicon: 'img/laptop/favicon.ico',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap',
        as: 'style',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap',
      },
    },
  ],  
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    localeConfigs: {
      'pt-br': {
        label: 'PT-BR',
        direction: 'ltr',
      },
      en: {
        label: 'EN',
        direction: 'ltr',
      },
    },
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'fonsdant',
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'alooo',
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
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap',
      type: 'text/css',
    },
  ],
  themeConfig: {
    navbar: {
      items: [
        { 
          label: 'blog',
          position: 'left',
          to: '/blog'
        },
        {
          type: 'localeDropdown',
          position: 'right',
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
