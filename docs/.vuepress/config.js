module.exports = {
  base: "/gh-pages/",
  title: "VueJS",
  description: "Frequently used vuepress settings.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/#installation" },
      { text: "Configure", link: "/#configure" },
      { text: "Deploying", link: "/#deploying" },
      { text: "Travis CI", link: "/#travis-ci" },
      { text: "Github", link: "https://github.com/w3labkr/gh-pages" },
    ],
    sidebar: "auto",
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
  },
  plugins: [
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    ["@vuepress/back-to-top", true],
    ["@vuepress/last-updated"],
    ["@vuepress/medium-zoom"],
    ["@vuepress/nprogress"],
    ["@vuepress/pagination"],
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-178473923-2",
      },
    ],
  ],
};
