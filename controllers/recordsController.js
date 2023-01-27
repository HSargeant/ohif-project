const User = require('../models/User')
const Record = require("../models/Record");
// module.exports = {
//     getIndex: async (req, res, next)=>{
//         res.send('API is working properly!');
//     }
// }

module.exports = {
  getProfile: async (req, res) => {
    try {
      const records = await Record.find({ user: req.user.id }).lean();
      res.json(records);
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const records = await Record.find().sort({ createdAt: "desc" }).populate("user").lean();
      res.json(records);
    } catch (err) {
      console.log(err);
    }
  },
  getRecord: async (req, res) => {
    try {
      const record = await Record.findById(req.params.id);
      res.json({ post: record || null});
    } catch (err) {
      console.log(err);
    }
  },
  createRecord: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const record = await Record.create({
        age: req.body.age,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        bmi: req.body.bmi,
        brixiScores: req.body.brixiScores,
        keyFindings: req.user.keyFindings,
        patientId:req.user.patientId,
        sex:req.body.sex,
        zipCode:req.body.zipCode
      });
      console.log("Record has been created");
      res.json({ record });
    } catch (err) {
      console.log(err);
    }
  },
  editRecord: async(req,res)=>{

  },
  deleteRecord: async (req, res) => {
    try {
      // Find post by id
      let record = await Record.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Record.remove({ _id: req.params.id });
      console.log("Deleted Record");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};