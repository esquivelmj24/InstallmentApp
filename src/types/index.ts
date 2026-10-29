export type UserRole = 'BUYER' | 'SELLER_PENDING' | 'SELLER' | 'SUPERADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
  role: UserRole;
  status: 'ACTIVE' | 'INACTIVE' | 'PENDING';
  address?: string;
  contactNumber?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sellerId: string;
  category: string;
  imageUrl: string;
}

export interface SellerRequest {
  id: string;
  userId: string;
  userName: string;
  requestDate: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  totalAmount: number;
  amountPaid: number;
  balance: number;
  status: 'PENDING' | 'PARTIAL' | 'PAID' | 'SHIPPED' | 'EXPIRED';
  deadline: Date | string;
  createdAt: Date | string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  paymentDate: Date | string;
  method: 'GCASH' | 'CREDIT_CARD' | 'CASH';
}
