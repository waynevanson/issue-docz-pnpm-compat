const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Pnpm Docz',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/wayne/code/clued/pnpm-docz/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Pnpm Docz',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/wayne/code/clued/pnpm-docz',
          templates:
            '/home/wayne/code/clued/pnpm-docz/node_modules/.pnpm/docz-core@2.4.0_gatsby@2.32.13+typescript@4.6.3/node_modules/docz-core/dist/templates',
          docz: '/home/wayne/code/clued/pnpm-docz/.docz',
          cache: '/home/wayne/code/clued/pnpm-docz/.docz/.cache',
          app: '/home/wayne/code/clued/pnpm-docz/.docz/app',
          appPackageJson: '/home/wayne/code/clued/pnpm-docz/package.json',
          appTsConfig: '/home/wayne/code/clued/pnpm-docz/tsconfig.json',
          gatsbyConfig: '/home/wayne/code/clued/pnpm-docz/gatsby-config.js',
          gatsbyBrowser: '/home/wayne/code/clued/pnpm-docz/gatsby-browser.js',
          gatsbyNode: '/home/wayne/code/clued/pnpm-docz/gatsby-node.js',
          gatsbySSR: '/home/wayne/code/clued/pnpm-docz/gatsby-ssr.js',
          importsJs: '/home/wayne/code/clued/pnpm-docz/.docz/app/imports.js',
          rootJs: '/home/wayne/code/clued/pnpm-docz/.docz/app/root.jsx',
          indexJs: '/home/wayne/code/clued/pnpm-docz/.docz/app/index.jsx',
          indexHtml: '/home/wayne/code/clued/pnpm-docz/.docz/app/index.html',
          db: '/home/wayne/code/clued/pnpm-docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
