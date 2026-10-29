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
