import { Schema, model } from 'mongoose';

const announcementSchema = new Schema({
  text: {
    type: String,
    required: true
  },

  links: {
    type: [],
    default: []
  },
  mediaImgs: {
    type: [],
    default: []
  },
  mediaFiles: {
    type: [],
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

const Announcement = new model("Announcement",announcementSchema);

export default Announcement;

