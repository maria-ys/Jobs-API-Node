const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company:{
    type: String,
    required: ['true', 'please provide company name'],
    maxlength: 50,
  },
  position:{
    type:String,
    required: ['true', 'please provide position name'],
    maxlength: 100,
  },
  status:{
    type:String,
    enum: ['pending', 'interview', 'declined'],
    default: 'pending',
  },
  createdBy:{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: ['true', 'please provide user name']
  }
}, {timestamps: true});

module.exports = mongoose.model('Job', JobSchema);
