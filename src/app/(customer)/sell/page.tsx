'use client';
import React, { useState } from 'react';

export default function SellPanel() {
  const [isSeller, setIsSeller] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleRequest = () => {
    setIsPending(true);
  };

  if (isSeller) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Seller Studio</h1>
            <p className="text-slate-500 mt-1">Manage your products and track your sales.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            + Add New Product
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Your Active Listings</h2>
          <p className="text-sm text-slate-500 italic">You haven't listed any products yet. Start by adding your first item!</p>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 max-w-lg mx-auto">
        <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-4xl animate-pulse">
          ⏳
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">Request Pending</h1>
          <p className="text-slate-500">
            Your application to become a seller is currently being reviewed by our Superadmins. 
            We typically respond within 24-48 hours.
          </p>
        </div>
        <div className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-widest">
          Status: Reviewing Documents
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-8 max-w-2xl mx-auto">
      <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center text-5xl">
        💰
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Start Selling</h1>
        <p className="text-lg text-slate-600">
          Turn your products into profit. Apply to become a verified seller and 
          reach thousands of customers across the platform.
        </p>
      </div>

      <div className="grid gap-4 w-full max-w-md">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl text-left space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
            <span>✅</span> <span>Verified Badges</span>
          </div>
          <p className="text-xs text-slate-500">Gain customer trust with our verification system.</p>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-2xl text-left space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
            <span>📈</span> <span>Analytics Dashboard</span>
          </div>
          <p className="text-xs text-slate-500">Track your sales, views, and growth in real-time.</p>
        </div>
      </div>

      <button 
        onClick={handleRequest}
        className="w-full max-w-md py-4 px-8 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all hover:scale-[1.02] shadow-lg shadow-indigo-200"
      >
        Apply to become a Seller
      </button>
    </div>
  );
}
