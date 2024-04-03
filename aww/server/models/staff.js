const mongoose = require('mongoose');
const StaffSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:false
    },
    role:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Staff',StaffSchema);