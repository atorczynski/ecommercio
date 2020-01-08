const cheerio = require('cheerio');
const axios = require('axios');
const Product = require('../schemas/productSchema');

function cleanPrice(str) {
  const removeAfter = str.indexOf('€');
  const cleanString = str.substring(0, removeAfter);
  return cleanString;
}

async function scrapeSingleURL(productURL, id) {

    console.log(productURL);
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
      const numPrice = cleanPrice(price) || -1;
      const description = $('div.product--description').text();

      console.log(title, description, img, price, numPrice);
      const updatedProduct = {
        url: productURL,
        title: title,
        description: description,
        img: img,
        price: numPrice
      };
      console.log(updatedProduct);
      await Product.updateOne({ _id: id }, updatedProduct);
    }
  
}
exports.scrapeSingleURL = scrapeSingleURL;
