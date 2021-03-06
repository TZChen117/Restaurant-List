const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//查看全部資料
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' }) // desc(反序)
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

//排序查看資料
router.get('/A~Z', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' }) // desc(反序)
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/Z~A', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'desc' }) // desc(反序)
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/category', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ category: 'asc' })
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/location', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ location: 'asc' })
    .then((restaurants) => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

//查詢資料
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then(restaurants => {
      return restaurants.filter(restaurant =>
        restaurant.name.includes(keyword) ||
        restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.category.toLowerCase().includes(keyword.toLowerCase())
      )
    })
    .then((restaurants) => res.render('index', { restaurants, keyword }))
    .catch(error => console.log(error))
})

module.exports = router