const express = require('express');
const router = express.Router();
const crawler = require('../controllers/pageCrawler');

router.post('/merchantbase', (req, res) => {
  const baseURL = req.body.params.baseURL;
  crawler.scrapeURL(baseURL);
});

module.exports = router;
