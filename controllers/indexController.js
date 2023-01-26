const User = require('../models/User')
module.exports = {
    getIndex: async (req, res, next)=>{
        res.send('API is working properly!');
    }
}