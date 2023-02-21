const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
  age: { 
    type: String 
	},
  bmi: { 
		type: String 
	},
  weight: { 
		type: String 
	},
  brixiaScores: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  cloudinaryId:{
    type:String
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
	},
	mortality: {
		type: String
	},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  icu: {
    type: String,
  },
  icuAdmits: {
    type: String,
  },
  examId: {
    type: String,
  },
},{ timestamps: true })

module.exports = mongoose.model('Exam', ExamSchema)