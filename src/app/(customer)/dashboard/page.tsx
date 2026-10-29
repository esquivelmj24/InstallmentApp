'use client';
import React, { useState, useEffect } from 'react';

export default function CustomerDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        // In a real app, you'd use the actual logged in userId
        const response = await fetch('/api/orders?userId=user_123');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">My Installments</h1>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-full">Member since Oct 2026</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <p className="text-slate-500">You have no active installment plans.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {orders.map((order: any) => (
            <div key={order._id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{order.productName}</h3>
                  <p className="text-sm text-slate-500">Order ID: {order._id}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    order.status === 'PAID' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {order.status}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Expires: {new Date(order.deadline).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-medium text-slate-500 uppercase">Total Price</p>
                  <p className="text-lg font-bold text-slate-900">${order.totalAmount}</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-medium text-emerald-600 uppercase">Amount Paid</p>
                  <p className="text-lg font-bold text-emerald-700">${order.amountPaid}</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                  <p className="text-xs font-medium text-rose-600 uppercase">Balance Due</p>
                  <p className="text-lg font-bold text-rose-700">${order.balance}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mr-4">
                  <div 
                    className="bg-indigo-600 h-full transition-all duration-500" 
                    style={{ width: `${(order.amountPaid / order.totalAmount) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  {Math.round((order.amountPaid / order.totalAmount) * 100)}% Paid
                </span>
              </div>

              {order.balance > 0 && (
                <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                  Make Partial Payment (GCash)
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
