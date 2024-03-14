const mongoose = require('mongoose')
const {Schema} = mongoose

const docSchema = new Schema()

const docModel = mongoose.model('doc',docSchema,'doc')

module.exports = docModel;