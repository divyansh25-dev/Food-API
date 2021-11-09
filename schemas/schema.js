const mongoose = require('mongoose')

const fpage = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  link:{
      type:String,
      required:true
  }

})

module.exports = mongoose.model('Fpage', fpage)