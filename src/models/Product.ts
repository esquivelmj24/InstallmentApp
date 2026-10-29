import mongoose, { Schema, model, models } from 'mongoose';
import { Product as ProductType } from '@/types';

const ProductSchema = new Schema<ProductType>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  sellerId: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, { timestamps: true });

export const Product = models.Product || model('Product', ProductSchema);
