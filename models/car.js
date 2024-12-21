const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
)

const Car = mongoose.model('Car', carSchema)

module.exports = Car
