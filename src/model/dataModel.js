import mongoose, { model, Schema } from "mongoose";

const dataSchema = new Schema({
  Name: {
    type: String,
  },
  Age: {
    type: String,
  },
  City: {
    type: String,
  },
  Occupation: {
    type: String,
  },
 
});

export const File = mongoose.models.File ?? model("File", dataSchema);
