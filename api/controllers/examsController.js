const User = require('../models/User')
const Exam = require("../models/Exam");
const cloudinary = require("../middleware/cloudinary");
// module.exports = {
//     getIndex: async (req, res, next)=>{
//         res.send('API is working properly!');
//     }
// }
module.exports = {
  getProfile: async (req, res) => {
    try {
      const exams = await Exam.find({ user: req.user.id }).lean();
      res.json(exams);
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const exams = await Exam.find().sort({ createdAt: "desc" }).populate("user").lean();
      res.json(exams);
    } catch (err) {
      console.log(err);
    }
  },
  getExam: async (req, res) => {
    try {

      const exam = await Exam.findOne({
          _id: req.params.id
      }).lean()
      if(exam){
        res.json(exam)
      }else{

      const response= await fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
      const data= await response.json()
      const data2 = await data.exams.find(elem=>elem._id==req.params.id)
      res.json(data2)
      }

    } catch (err) {
      console.log(err);
    }
  },
  createExam: async (req, res) => {
    console.log(req)
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      const exam = await Exam.create({

        age: req.body.age,
        imageURL: result.secure_url,
        cloudinaryId: result.public_id,
        bmi: req.body.bmi,
        brixiaScores: req.body.brixiaScores,
        keyFindings: req.body.keyFindings,
        patientId:req.body.patientId,
        sex:req.body.sex,
        zipCode:req.body.zipCode,
        user:req.user.id

      });
      console.log("Exam has been created");
      res.json({ exam });
    } catch (err) {
      console.log(err);
    }
  },
  editExam: async(req,res)=>{

  },
  deleteExam: async (req, res) => {
    try {
      // Find post by id
      let exam = await Exam.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(exam.cloudinaryId);
      // Delete post from db
      await Exam.deleteOne({ _id: req.params.id });
      console.log("Deleted Exam");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};