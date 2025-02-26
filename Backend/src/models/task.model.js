import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:150,
        trim:true,
        index:true
    },
    description:{
        type:String,
        max:500
    },
    dueDate:{
        type:Date,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    isFavorite:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export const Task = mongoose.model("Task",taskSchema);