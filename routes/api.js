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

router.get('/merchantproducts/:id', async (req, res) => {
  const id = req.params.id;
  const products = await Products.findById(id);
  res.send(products);
});

router.delete('/merchantproducts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Products.findByIdAndDelete(id);
    res.send(deleted);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
