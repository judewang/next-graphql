const siteUrl = process.env.NEXT_PUBLIC_HOST || 'https://jude.one';

module.exports = {
  siteUrl,
  exclude: ['/server-sitemap.xml'],
  generateRobotsTxt: true,
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     `${siteUrl}/server-sitemap.xml`.replace(/(?<!(http:|https:))\/+/gi, '/'),
  //   ],
  // },
};
