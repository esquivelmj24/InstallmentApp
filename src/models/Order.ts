import mongoose, { Schema, model, models } from 'mongoose';
import { Order as OrderType } from '@/types';

const OrderSchema = new Schema<OrderType>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  amountPaid: { type: Number, default: 0 },
  balance: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['PENDING', 'PARTIAL', 'PAID', 'SHIPPED', 'EXPIRED'], 
    default: 'PENDING' 
  },
  deadline: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Order = models.Order || model('Order', OrderSchema);
