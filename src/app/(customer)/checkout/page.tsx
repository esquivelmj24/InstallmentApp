'use client';
import React from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        <Link href="/shop" className="text-sm text-indigo-600 font-semibold hover:underline">← Back to Shop</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Shipping Address</h2>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm text-slate-600">
              <p className="font-bold text-slate-900">John Doe</p>
              <p>123 Main St, Springfield, USA</p>
              <p>+1 (555) 000-0000</p>
            </div>
            <button className="text-xs font-bold text-indigo-600 hover:underline">Change Address</button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
            <div className="flex gap-3">
              <div className="flex-1 p-4 border-2 border-indigo-600 bg-indigo-50 rounded-2xl flex items-center gap-3">
                <span className="text-xl">💳</span>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">Credit Card</p>
                  <p className="text-slate-500">**** 4242</p>
                </div>
              </div>
              <div className="flex-1 p-4 border border-slate-200 rounded-2xl flex items-center gap-3 hover:border-indigo-300 cursor-pointer transition-colors">
                <span className="text-xl">📱</span>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">Digital Wallet</p>
                  <p className="text-slate-500">Apple/Google Pay</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-semibold text-slate-900">$1,200.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Shipping</span>
              <span className="text-emerald-600 font-semibold">Free</span>
            </div>
            <div className="pt-3 border-t border-slate-100 flex justify-between font-bold text-lg">
              <span className="text-slate-900">Total</span>
              <span className="text-indigo-600">$1,200.00</span>
            </div>
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}
