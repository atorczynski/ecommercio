const cheerio = require('cheerio');
const axios = require('axios');
const Product = require('../schemas/productSchema');

async function scrapeURL(productURL, scrapedURLs) {
  try {
    console.log(productURL);
    // if (scrapedURLs.length > 10) return;
    scrapedURLs.push(productURL);
    const res = await axios.get(productURL);
    const $ = cheerio.load(res.data);
    if ($('.product--details').length > 0) {
      const title = $('h1.product--title')
        .first()
        .text();
      const img = $('span img').attr('src');
      const price = $('.product--price')
        .first()
        .text();
      const numPrice = parseFloat(price) || -1;
      console.log(title, img, price, numPrice);
      const crawledProduct = new Product({
        url: productURL,
        title: title,
        img: img,
        price: numPrice
      });
      await crawledProduct.save();
    }
    const allLinks = $('a');
    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks.get(i);
      const href = link.attribs.href || '';

      if (href.startsWith('https://shop.sompex.de/') && !scrapedURLs.includes(href)) {
        await scrapeURL(href, scrapedURLs);
      }
    }
    // allLinks.each((index, link) => {
    //   const href = link.attribs.href || '';

    //   if (href.startsWith('https://shop.sompex.de/') && !scrapedURLs.includes(href)) {
    //     scrapeURL(href, scrapedURLs);
    //   }
    // });
  } catch (error) {
    console.error('Error: ', productURL, error);
  }
}
exports.scrapeURL = scrapeURL;
