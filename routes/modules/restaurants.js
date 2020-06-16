const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//新增資料
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const restaurant = req.body
  return Restaurant.create(restaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//詳細資料
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

//詳細資料進行編輯
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

//刪除資料
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//更新編輯資料
router.put('/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const phone = req.body.phone
  const image = req.body.image
  const location = req.body.location
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.id = id
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.phone = phone
      restaurant.image = image
      restaurant.location = location
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
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
        restaurant.category.toLowerCase().includes(keyword)
      )
    })
    .then((restaurants) => res.render('index', { restaurants, keyword }))
    .catch(error => console.log(error))
})

module.exports = router