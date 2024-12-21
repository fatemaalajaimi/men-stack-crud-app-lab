const express = require('express')
const router = express.Router()

const Car = require('../models/car')

router.get('/', async (req, res) => {
  try {
    const allCars = await Car.find()
    res.render('cars/index.ejs', { cars: allCars })
  } catch (err) {
    console.log(err)
    res.redirect('/')
  }
})

router.get('/new', async (req, res) => {
  res.render('cars/new.ejs') // This is the ejs file name under views
})

router.post('/', async (req, res) => {
  await Car.create(req.body)
  res.redirect('/cars')
})

router.get('/:carId', async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId)

    res.render('cars/show.ejs', {
      car: car
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.delete('/:carId', async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId)

    await car.deleteOne()
    res.redirect('/cars')
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

router.get('/:carId/edit', async (req, res) => {
  try {
    const currentCar = await Car.findById(req.params.carId)
    res.render('cars/edit.ejs', {
      car: currentCar
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.put('/:carId', async (req, res) => {
  try {
    const currentCar = await Car.findById(req.params.carId)
    await currentCar.updateOne(req.body)
    res.redirect('/cars')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

module.exports = router
