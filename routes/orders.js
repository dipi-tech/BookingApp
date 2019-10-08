var express = require('express');
var router = express.Router();
var orderService = require('../services/orderservice')

router.post('/addToCart', function (req, res, next) {
    console.log(req.body.orderInfo)
    orderService.addOrderToCard(req.body.orderInfo).then(value => {
        console.log("Here ", value.get('trackingStatus'));
        res.json({ error: false, data: value });
    }).catch(err => {
        res.status(500).json({ error: true, data: { message: err } });
    })
})

router.put('/placeOrUpdateOrder',function(req,res,next){
    console.log(req.body.orderInfo)
    orderService.placeORUpdateOrder(req.body.orderInfo).then(value => {
        console.log("Here ", value.get('trackingStatus'));
        res.json({ error: false, data: value });
    }).catch(err => {
        res.status(500).json({ error: true, data: { message: err } });
    })
})


module.exports = router;