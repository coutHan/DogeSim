"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    USDT: { type: Schema.Types.Number },
    Doge: { type: Schema.Types.Number }
});

UserSchema.statics.create = (data) => {
    return new User(data);
};
  

const User = mongoose.model("User", UserSchema);
module.exports = User;