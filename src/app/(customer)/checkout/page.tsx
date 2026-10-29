'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentAmount, setPaymentAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create the Order first
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user_123', // Mock user ID
          productId: 'p1',
          productName: 'UltraBook Pro 14',
          totalAmount: 1200,
        }),
      });
      const order = await orderResponse.json();

      // 2. Record the partial payment via GCash
      const paymentResponse = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: order._id,
          amount: Number(paymentAmount),
          method: 'GCASH',
        }),
      });

      if (paymentResponse.ok) {
        alert('Payment successful! Your installment plan is active.');
        router.push('/dashboard');
      } else {
        throw new Error('Payment failed');
      }
    } catch (err: any) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Installment Checkout</h1>
        <Link href="/shop" className="text-sm text-indigo-600 font-semibold hover:underline">← Back to Shop</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Order Details</h2>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Item:</span>
                <span className="font-bold text-slate-900">UltraBook Pro 14</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Price:</span>
                <span className="font-bold text-slate-900">$1,200.00</span>
              </div>
              <div className="flex justify-between text-indigo-600 font-bold">
                <span>Installment Period:</span>
                <span>1 Year (365 Days)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Payment via GCash</h2>
            <form onSubmit={handlePayment} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Downpayment / Partial Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input 
                    type="number" 
                    required 
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="Enter amount to pay"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-700">
                💡 You can pay any amount now and settle the balance within 1 year.
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                {loading ? 'Processing...' : 'Pay with GCash'}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-slate-900">Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Item Total</span>
              <span className="font-semibold text-slate-900">$1,200.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Initial Payment</span>
              <span className="font-semibold text-indigo-600">${paymentAmount || '0.00'}</span>
            </div>
            <div className="pt-3 border-t border-slate-100 flex justify-between font-bold text-lg">
              <span className="text-slate-900">Remaining Balance</span>
              <span className="text-rose-600">${Math.max(0, 1200 - Number(paymentAmount)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
