// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/arbitrum-index', changefreq: 'weekly', priority: 0.3 },
  { url: '/ethereum-index', changefreq: 'weekly', priority: 0.9 },
  { url: '/ethereum-constituents', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 },
  { url: '/research', changefreq: 'monthly', priority: 0.7 },
  // Add more URLs as needed
];

const stream = new SitemapStream({ hostname: 'https://dcgen.finance' });

stream.pipe(createWriteStream('sitemap.xml'));
links.forEach(link => stream.write(link));
stream.end();
