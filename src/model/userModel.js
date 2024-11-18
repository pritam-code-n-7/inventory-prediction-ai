import  mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
})

export const User =  mongoose.models.User ?? model("User", userSchema)