const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://m.starnieuws.com/index.php';

rp(url).then(html => {
    const newsArray = [];

    $('.headlines_content > ul > li > a', html).map((index, element) => {
        newsArray.push({url: element.attribs.href, data: element.children[0].data});
    });

    console.log(newsArray);
});
