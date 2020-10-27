module.exports = {
  title: 'Renovate Docs',
  tagline: 'Documentation for Renovate',
  url: 'https://docs.renovate.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'throw',
  favicon: 'img/logo.png',
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Renovate Docs',
      logo: {
        alt: 'Renovate Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/renovatebot/renovate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      logo: {
        alt: 'Renovate Logo',
        src: '/img/logo.png',
      },
      copyright: `Built with Daucusaurus v2`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
        docs: {
          path: 'usage',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/renovatebot/renovate/edit/master/docs/',
        },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      },
    ],
  ],
};
