const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')

mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!!!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  restaurantList.results.forEach((restaurant) => {
    Restaurant.create({
      id: restaurant.id,
      name_en: restaurant.name_en,
      name: restaurant.name,
      category: restaurant.category,
      phone: restaurant.phone,
      image: restaurant.image,
      location: restaurant.location,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description,
    })
  })

  console.log('done')
})