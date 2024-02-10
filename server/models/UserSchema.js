import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    googleId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
},{timestamps:true});


const User = new model("User",UserSchema);

export default User;
