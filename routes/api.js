const express = require('express');
const router = express.Router();
const Product = require('../schemas/productSchema');
const crawler = require('../controllers/pageCrawler');

router.post('/merchantbase', (req, res) => {
  const baseURL = req.body.params.baseURL;
  crawler.scrapeURL(baseURL);
});

module.exports = router;
