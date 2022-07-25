const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: {
    type: String,
  },
  country: {
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
  socials: {
    type: Object,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
