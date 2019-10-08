var express = require('express');
var router = express.Router();
var tableService = require('../services/tableservice')


router.post('/reserveTable', function (req, res, next) {
    console.log(req.body.reservationInfo)
    tableService.confirmReservation(req.body.reservationInfo).then(result => {
        if (result != null)
            res.json({ error: false, data: result });
        else
            res.json({ error: true, data: null })
    })
})

module.exports = router