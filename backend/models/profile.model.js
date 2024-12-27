import mongoose from "mongoose";

const educatiomSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  fieldofstudy: {
    type: String,
    required: true,
  },
});

const workSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
    default: "",
  },
});

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bio: {
    type: String,
    default: "",
  },
  education: [educatiomSchema],

  currentPost: {
    type: String,
    default: "",
  },
  pastWork: {
    type: [workSchema],
    default: "",
  },
});


const profile = mongoose.model("Profile", profileSchema);
export default profile;