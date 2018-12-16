const scraper = require('./lib/scraper');

const url = 'http://m.starnieuws.com/index.php';
const urlContent = '.headlines_content > ul > li > a';

scraper.exec(url, urlContent).then(data => {
    console.log(data);
});
