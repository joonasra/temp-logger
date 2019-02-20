const mongoose = require('mongoose')

const temperatureSchema = new mongoose.Schema({
  y: Number,
  x: Number,
  date: String
})

const Temperature = mongoose.model('Temperature', temperatureSchema)

module.exports = Temperature
