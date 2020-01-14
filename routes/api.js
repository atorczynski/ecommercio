const express = require('express');
const router = express.Router();
const crawler = require('../lib/controllers/shopware/pageCrawler');
const pageCrawler = require('../lib/controllers/shopware/singlePageCrawler');
const Products = require('../schemas/productSchema');

router.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Products.findById(id);
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.end();
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Products.findByIdAndDelete(id);
    console.log(id + ' deleted!');
    res.send(deleted);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.end();
  }
});

router.post('/products', (req, res) => {
  function getBaseUrl(baseUrl) {
    const pathArray = baseUrl.split('/');
    const protocol = pathArray[0];
    const host = pathArray[2];
    baseUrl = protocol + '//' + host;
    console.log(baseUrl);
    return baseUrl;
  }
  try {
    const baseURL = req.body.params.baseURL;

    crawler.scrapeURL(baseURL, [], getBaseUrl(baseURL));
    res.end();
  } catch (error) {
    console.error(error);
    res.status(400);
    res.end();
  }
});

router.put('/increment/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Products.findByIdAndUpdate(id, { $inc: { referrals: 1 } });
    res.send('Successfully incremented ' + id);
  } catch (error) {
    console.error(error);
    res.status(400);
    res.end();
  }
});
router.put('/products', async (req, res) => {
  try {
    console.log(req);
    const url = req.body.params.url;
    const id = req.body.params.id;
    console.log(id, url);
    await pageCrawler.scrapeSingleURL(url, id);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(400);
    res.end();
  }
});

router.get('/products', async (req, res) => {
  try {
    const { q } = req.query;
    const query = q
      ? {
          title: { $regex: '.*' + q + '.*', $options: 'i' }
        }
      : {};
    const products = await Products.find(query);
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.end();
  }
});

module.exports = router;
