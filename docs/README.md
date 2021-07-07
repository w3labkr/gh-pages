# Vuepress

Frequently used vuepress settings.

## Installation

Initialize with your preferred package manager.

```shell
$ yarn init -y
$ yarn add -D vuepress
$ mkdir docs && cd docs
$ echo '# Hello VuePress' > README.md
$ echo '' > .vuepress/config.js
```

package.json

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Recommended official plugin.

```shell
$ yarn add -D @vuepress/plugin-active-header-links
$ yarn add -D @vuepress/plugin-back-to-top
$ yarn add -D @vuepress/plugin-google-analytics
$ yarn add -D @vuepress/plugin-medium-zoom
$ yarn add -D @vuepress/plugin-nprogress
```

Serve the documentation site in the local server.

```shell
$ yarn docs:dev
```

## Configure

docs/.vuepress/config.js

### Title

```javascript
module.exports = {
  title: 'Hello VuePress',
}
```

### Description

```javascript
module.exports = {
  description: 'Just playing around',
}
```

### Logo

```javascript
module.exports = {
  themeConfig: {
    logo: "./logo.png",
  },
}
```

### Nav

```javascript
module.exports = {
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Example", link: "/#example" },
      { text: "External", link: "https://github.com/<USERNAME>/<REPO>" },
    ],
  },
}
```

### Sidebar

Single page sidebar

```
o
`-- docs/
    `-- README.md
```

```javascript
module.exports = {
  themeConfig: {
    sidebar: "auto",
  },
}
```

Multiple page sidebar

```
o
`-- docs/
    |-- ex1/
    |   `-- example1.md
    `-- ex2/
        `-- example2.md
```

```javascript
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: "Example1",
        collapsable: false,
        children: ["/ex/example1"],
      },
      {
        title: "Example2",
        collapsable: false,
        children: ["/ex/example2"],
      },
    ]
  }
}
```


### Search

```javascript
module.exports = {
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "Search...",
  },
}
```

### Prev and Next Links

```javascript
module.exports = {
  themeConfig: {
    prevLinks: true,
    nextLinks: true,
  },
}
```

### LastUpdated

```javascript
module.exports = {
  themeConfig: {
    lastUpdated: "Last Updated",
  },
}
```

### SmoothScroll

```javascript
module.exports = {
  themeConfig: {
    smoothScroll: true,
  },
}
```

### Plugins

```javascript
module.exports = {
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
        ga: "",
      },
    ],
  ],
}
```

## Deploying

Create remote branch "gh-pages".

### Set git information

```shell
$ git config user.name <USERNAME>
$ git config user.email <USERMAIL>
```

### Generate a new SSH key

Generate a new single SSH key without password on macOS.

```shell
$ ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -C <user@example.com> -N ''
$ pbcopy < ~/.ssh/id_rsa.pub
```

Generate new multiple SSH keys without password on macOS.

```shell
$ ssh-keygen -t rsa -b 4096 -f ~/.ssh/<USERNAME>_id_rsa -C <user@example.com> -N ''
$ vim ~/.ssh/config
Host <USERNAME>.github.com
     HostName github.com
     User git
     IdentityFile ~/.ssh/<USERNAME>_id_rsa
     IdentitiesOnly yes

$ pbcopy < ~/.ssh/<USERNAME>_id_rsa.pub
```

### Edit the git repo address

single SSH key

```bash
$ vim deploy.sh
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

multiple SSH keys

```bash
$ vim deploy.sh
git push -f git@<USERNAME>.github.com:<USERNAME>/<REPO>.git master:gh-pages
```

### Run the script

```shell
$ chmod +x ./deploy.sh
$ ./deploy.sh
```

## Travis CI

Generate a new personal access token on Github.

- What’s this token for? \<REPO\>_TRAVIS_CI_TOKEN
- repo (Full control of private repositories) - check

Register the token in the Travis CI environment variable.

- NANE: GITHUB_TOKEN
- VALUE: <REPO_TRAVIS_CI_TOKEN>

## Reference

- <https://vuepress.vuejs.org/>