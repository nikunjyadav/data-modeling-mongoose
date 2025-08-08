import mongoose from 'mongoose';

const favourite = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    wishes: [favourite],
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
