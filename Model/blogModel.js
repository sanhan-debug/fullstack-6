import { Schema,model } from "mongoose";

const blogSchema = new Schema({
    header:String,
    description:String,
    date:Date,
    image:String
},{
    versionKey:false
})

export const blogModel = model("blogs",blogSchema)

