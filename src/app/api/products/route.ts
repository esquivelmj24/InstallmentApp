import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Product } from '@/models/Product';

// Fallback data in case DB is empty
const FALLBACK_PRODUCTS = [
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

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({});
    
    // If database is empty, return fallback data so the customer sees products
    if (!products || products.length === 0) {
      return NextResponse.json(FALLBACK_PRODUCTS, { 
        status: 200, 
        headers: { 'X-Data-Source': 'Fallback' } 
      });
    }

    return NextResponse.json(products, { 
      status: 200, 
      headers: { 'X-Data-Source': 'Database' } 
    });
  } catch (error: any) {
    // In case of DB connection error, still return fallback data to keep site working
    return NextResponse.json(FALLBACK_PRODUCTS, { 
      status: 200, 
      headers: { 'X-Data-Source': 'Fallback-Error' } 
    });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const product = await Product.create(body);
    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
