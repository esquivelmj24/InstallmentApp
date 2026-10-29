import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Product } from '@/models/Product';
import { User } from '@/models/User';

export async function GET() {
  try {
    await dbConnect();

    // Seed Products
    const products = [
      { name: 'UltraBook Pro 14', description: 'High-performance laptop for creators.', price: 1200, sellerId: 's1', category: 'Electronics', imageUrl: '💻' },
      { name: 'NoiseCancel Headphones', description: 'Studio quality sound isolation.', price: 250, sellerId: 's2', category: 'Audio', imageUrl: '🎧' },
      { name: 'SmartWatch Series X', description: 'Health tracking and notifications.', price: 199, sellerId: 's1', category: 'Wearables', imageUrl: '⌚' },
      { name: 'ErgoChair Elite', description: 'Premium ergonomic office chair.', price: 450, sellerId: 's3', category: 'Furniture', imageUrl: '🪑' },
      { name: 'Mechanical Keyboard', description: 'Tactile switches for gaming.', price: 120, sellerId: 's2', category: 'Electronics', imageUrl: '⌨️' },
      { name: '4K Ultra Monitor', description: 'Vivid colors, 144Hz refresh rate.', price: 380, sellerId: 's1', category: 'Electronics', imageUrl: '🖥️' },
      { name: 'Gaming Mouse RGB', description: 'Ultra-fast response time for pro gamers.', price: 80, sellerId: 's2', category: 'Electronics', imageUrl: '🖱️' },
      { name: 'Leather Office Bag', description: 'Genuine leather, perfect for professionals.', price: 150, sellerId: 's3', category: 'Accessories', imageUrl: '💼' },
      { name: 'Wireless Charging Pad', description: 'Fast charging for all Qi-enabled devices.', price: 40, sellerId: 's1', category: 'Electronics', imageUrl: '🔌' },
    ];

    await Product.deleteMany({}); // Clear existing to avoid duplicates
    await Product.insertMany(products);

    // Seed a Superadmin
    await User.deleteMany({ role: 'SUPERADMIN' });
    await User.create({
      name: 'Super Admin',
      email: 'admin@installmenthub.com',
      password: 'adminpassword123',
      role: 'SUPERADMIN',
      status: 'ACTIVE',
    });

    return NextResponse.json({ 
      message: 'Database seeded successfully!', 
      productsCount: products.length,
      adminCreated: true 
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
