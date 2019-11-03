const { model, Schema } = require('mongoose')

const factSchema = new Schema(
  {
    _id: String,
    text: String,
    source: String,
    sourceUrl: String
  },
  {
    timestamps: true,
    _id: false
  }
)

module.exports = model('Fact', factSchema)
