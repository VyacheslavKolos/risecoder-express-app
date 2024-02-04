const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema(
  {
    accessToken: { type: String },
    refreshToken: { type: String },
    _user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('auth', AuthSchema);
