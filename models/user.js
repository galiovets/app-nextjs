// import { Schema, model, models } from "mongoose";

// mongoose.Promise = global.Promise;

const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: {
    type: String,
  },
  interests: [
    {
      type: String,
    },
  ],
  experience: [
    {
      type: String,
    },
  ],
});

// const User = model("user", userSchema);
// export default User;

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
