import { Schema, model } from 'mongoose';

const classroomSchema = new Schema({

  className: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  batch: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

},{timestamps:true});

const Classroom = model('Classroom', classroomSchema);

export default Classroom;