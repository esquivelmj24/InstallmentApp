import mongoose, { Schema, model, models } from 'mongoose';
import { User as UserType } from '@/types';

const UserSchema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['BUYER', 'SELLER_PENDING', 'SELLER', 'SUPERADMIN'], 
    default: 'BUYER' 
  },
  status: { 
    type: String, 
    enum: ['ACTIVE', 'INACTIVE', 'PENDING'], 
    default: 'ACTIVE' 
  },
  address: { type: String },
  contactNumber: { type: String },
}, { timestamps: true });

export const User = models.User || model('User', UserSchema);
