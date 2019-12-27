const cheerio = require('cheerio');
const axios = require('axios');
const Product = require('../schemas/productSchema');

async function scrapeURL(productURL) {
  axios.get(productURL).then(res => {
    const $ = cheerio.load(res.data);
    const title = $('.product--title')
      .first()
      .text();
    const img = $('span img').attr('src');
    const price = $('.product--price')
      .first()
      .text();
    const numPrice = parseFloat(price);

    const crawledProduct = new Product({
      url: productURL,
      title: title,
      img: img,
      price: numPrice
    });
    crawledProduct.save();
  });
}
exports.scrapeURL = scrapeURL;
