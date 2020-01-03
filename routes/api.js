const express = require('express');
const router = express.Router();
const crawler = require('../controllers/pageCrawler');
const Products = require('../schemas/productSchema');

router.post('/merchantproducts', (req, res) => {
  const baseURL = req.body.params.baseURL;
  crawler.scrapeURL(baseURL, []);
});

router.get('/merchantproducts', async (req, res) => {
  const products = await Products.find();
  res.send(products);
});

router.delete('/merchantproducts:id', async (req, res) => {
  const product = await Products.findById(req.params.id);
  res.send(product);
});

module.exports = router;
