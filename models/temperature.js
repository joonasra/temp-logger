const mongoose = require('mongoose')

const temperatureSchema = new mongoose.Schema({
  y: Number,
  y: Number,
  date: Date
})

const Temperature = mongoose.model('Temperature', temperatureSchema)

module.exports = Temperature
