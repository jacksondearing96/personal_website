var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('experience', { title: 'Jackson Dearing Resume' });
});

module.exports = router;