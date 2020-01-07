const express = require('express');
const router = express.Router();
const crawler = require('../controllers/pageCrawler');
const pageCrawler = require('../controllers/singlePageCrawler');
const Products = require('../schemas/productSchema');

router.post('/merchantproducts', (req, res) => {
  const baseURL = req.body.params.baseURL;
  crawler.scrapeURL(baseURL, []);
  res.end();
});

router.put('/merchantproducts', (req, res) => {
  try {
    console.log(req);
    const url = req.body.params.url;
    const id = req.body.params.id;
    console.log(id, url);
    pageCrawler.scrapeSingleURL(url, id);
    res.end();
  } catch (error) {
    console.error(error);
  }
});

router.get('/merchantproducts', async (req, res) => {
  const products = await Products.find();
  res.send(products);
});

router.get('/search/:query', async (req, res) => {
  try {
    const searchQuery = req.params.query;
    const foundProducts = await Products.find({
      title: { $regex: '.*' + searchQuery + '.*', $options: 'i' }
    });
    console.log(foundProducts);
    res.send(foundProducts);
    res.end();
  } catch (error) {
    console.error(error);
  }
});

router.get('/merchantproducts/:id', async (req, res) => {
  const id = req.params.id;
  const products = await Products.findById(id);
  res.send(products);
});

router.delete('/merchantproducts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Products.findByIdAndDelete(id);
    console.log(id + ' deleted!');
    res.send(deleted);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
