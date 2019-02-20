const temperatureRouter = require('express').Router()
const Temperature = require('../models/temperature')

temperatureRouter.get('/', async (request, response) => {
  const temperatures = await Temperature.find({})
  response.json(temperatures)
})

temperatureRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    const temperature = new Temperature({
      y: body.y,
      x: body.x,
      date: body.date
    })

    const savedTemperature = await temperature.save()

    response.json(savedTemperature)
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = temperatureRouter
