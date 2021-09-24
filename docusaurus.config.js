const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "fiqryq",
  tagline: "Membanteng",
  url: "https://fiqryq.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "fiqryq",
  projectName: "porfolio",
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      title: "Hi there 👋",
      logo: {
        alt: "My Site Logo",
        src: "img/icon.svg",
      },
      items: [
        { to: "/", label: "Blog", position: "left" },
        // { to: "/about", label: "About", position: "right" },
        // {
        //   type: "doc",
        //   docId: "index",
        //   position: "right",
        //   label: "About",
        // },
        {
          href: "https://github.com/fiqryq",
          position: "right",
          label: "Github",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Support me",
          items: [
            {
              label: "Saweria",
              href: "https://saweria.co/fiqryq",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/fiqryq",
            },
            {
              label: "Instagam",
              href: "https://instagram.com/fiqryq",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fiqry choerudin.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [require.resolve("@easyops-cn/docusaurus-search-local")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
