const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
  age: { 
    type: Number 
	},
  bmi: { 
		type: Number 
	},
  brixiaScores: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  keyFindings: {
    type: String,
  },
  patientId: {
    type: String, 
    unique: true
  },
	sex: {
		type: String
	},
	zipCode: {
		type: String
	}
},{ timestamps: true })

module.exports = mongoose.model('Record', RecordSchema)