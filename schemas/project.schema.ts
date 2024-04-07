import { Schema } from "mongoose";

export const projectSchema = new Schema({
    title: String,
    description: String
})