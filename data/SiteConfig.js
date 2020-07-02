const config = {
  siteTitle: 'EUSO',
  siteTitleShort: 'EUSO',
  siteTitleAlt: 'EUSO',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://string.eusa.ed.ac.uk/',
  repo: 'https://github.com/Edinburgh-University-String-Orchestra/website',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'The Edinburgh University String Orchestra is the University\'s best and only string orchestra.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-165301838-3',
  postDefaultCategoryID: 'Music',
  newsletter: 'https://eusorchestra.substack.com',
  newsletterEmbed: 'https://eusorchestra.substack.com/embed',
  userName: 'EUSO',
  userEmail: 'euso.president@gmail.com',
  userTwitter: '@EdinStrings',
  menuLinks: [
    {
      name: 'News',
      link: '/news/',
    },
    {
      name: 'Concerts',
      link: '/concerts/',
    },
    {
      name: 'Outreach',
      link: '/outreach/',
    },
    {
      name: 'Social Life',
      link: '/social/',
    },
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Join us',
      link: '/join/'
    }
  ],
  themeColor: '#E16259', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
