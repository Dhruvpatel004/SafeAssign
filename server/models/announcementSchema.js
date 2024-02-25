import { Schema, model } from 'mongoose';

const announcementSchema = new Schema({
  text: {
    type: String,
    required: true
  },

  links: {
    type: [String],
    default: []
  },
  mediaFiles: {
    type: [String],
    default: []
  },
 
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postedIn: {
    type: Schema.Types.ObjectId,
    ref: 'Classroom',
    required: true
  },

},{timestamps:true});

export default model('Announcement', announcementSchema);