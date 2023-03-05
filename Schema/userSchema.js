const mongoose = require("mongoose");

adminAccessSchemaFunc = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter you full name"],
    minlength: [5, "Enter full name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Enter your email address"],
    trim: true,
  },
  position: {
    type: String,
    default: "client",
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  transaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transactionSchema",
      required: true,
    },
  ],
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("adminAccessSchema", adminAccessSchemaFunc);
