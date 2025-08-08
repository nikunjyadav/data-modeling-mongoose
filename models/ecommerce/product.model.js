import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'cant have -ve value'],
      max: 99999,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'cant have -ve value'],
      max: 99999,
    },
  },
  { timestamps: true }
);

productSchema.index({
  category: 1,
});

export const Product = mongoose.model('Product', productSchema);
