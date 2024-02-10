import { Schema, model } from 'mongoose';

const userRoleSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  classroom: {
    type: Schema.Types.ObjectId,
    ref: 'Classroom',
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['teacher', 'student'],
    default: 'student',
  },
  isArchived: {
    type: Boolean,
    default: false,
    enum:[true,false],
    default:false,
  },

},{timestamps:true});

const UserRole = model('UserRole', userRoleSchema);

export default UserRole;