import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"], // use enum if we want that user select only from some certain values
  },
  profilePic: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
  },
  // createdAt, updatedAt => Member since <createdAt>
},
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;