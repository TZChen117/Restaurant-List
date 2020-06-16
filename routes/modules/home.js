const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//查看全部資料
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router