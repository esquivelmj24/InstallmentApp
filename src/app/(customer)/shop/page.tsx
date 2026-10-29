import React from 'react';
import { Product } from '@/types';

const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', name: 'UltraBook Pro 14', description: 'High-performance laptop for creators.', price: 1200, sellerId: 's1', category: 'Electronics', imageUrl: '💻' },
  { id: 'p2', name: 'NoiseCancel Headphones', description: 'Studio quality sound isolation.', price: 250, sellerId: 's2', category: 'Audio', imageUrl: '🎧' },
  { id: 'p3', name: 'SmartWatch Series X', description: 'Health tracking and notifications.', price: 199, sellerId: 's1', category: 'Wearables', imageUrl: '⌚' },
  { id: 'p4', name: 'ErgoChair Elite', description: 'Premium ergonomic office chair.', price: 450, sellerId: 's3', category: 'Furniture', imageUrl: '🪑' },
  { id: 'p5', name: 'Mechanical Keyboard', description: 'Tactile switches for gaming.', price: 120, sellerId: 's2', category: 'Electronics', imageUrl: '⌨️' },
  { id: 'p6', name: '4K Ultra Monitor', description: 'Vivid colors, 144Hz refresh rate.', price: 380, sellerId: 's1', category: 'Electronics', imageUrl: '🖥️' },
];

export default function Shop() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Marketplace</h1>
          <p className="text-slate-500 mt-1">Discover quality products from verified sellers.</p>
        </div>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-64"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-4 group">
            <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform">
              {product.imageUrl}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider px-2 py-0.5 bg-indigo-50 rounded-full">
                  {product.category}
                </span>
                <span className="text-lg font-bold text-slate-900">${product.price}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
              <button className="w-full mt-4 py-2 px-4 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
