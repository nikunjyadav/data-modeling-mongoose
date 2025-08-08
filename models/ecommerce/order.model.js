import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const orderSchema = new mongoose.Schema(
  {
    status: {
      type: string,
      enum: ['waiting', 'confirmed', 'cancelled'],
      default: 'waiting',
    },
    orderPrice: {
      type: Number,
      default: 0,
      min: 0,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    address: {
      type: String,
      required: true,
    },
    item: [itemSchema],
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
