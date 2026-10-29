import mongoose, { Schema, model, models } from 'mongoose';
import { Payment as PaymentType } from '@/types';

const PaymentSchema = new Schema<PaymentType>({
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  method: { 
    type: String, 
    enum: ['GCASH', 'CREDIT_CARD', 'CASH'], 
    required: true 
  },
}, { timestamps: true });

export const Payment = models.Payment || model('Payment', PaymentSchema);
