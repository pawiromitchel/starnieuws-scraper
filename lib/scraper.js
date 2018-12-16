const rp = require('request-promise');
const $ = require('cheerio');

/**
 * Execute the scraper
 * @param {string} url url to scrape
 * @param {string} scrapeThis what to scrape, search the DOM
 */
const exec = async (url, scrapeThis) => {
    const newsArray = [];
    const fillArray = rp(url).then(html => {
        $(scrapeThis, html).map((index, element) => {
            newsArray.push({url: element.attribs.href, data: element.children[0].data});
        });
        return newsArray;
    });

    return await fillArray;
}

module.exports = { exec };
