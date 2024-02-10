import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    googleId: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    userName: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    avatar: {
        type: String, // Google profile picture link
        require: true
    },
    refreshToken: {
        type: String
    }
},{timestamps:true});



const User = new model("User",UserSchema);

export default User;
