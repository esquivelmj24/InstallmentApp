'use client';
import React, { useState, useEffect } from 'react';

export default function CustomerDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentLoading, setPaymentLoading] = useState(false);

  async function fetchOrders() {
    try {
      const response = await fetch('/api/orders?userId=user_123');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleOpenPayment = (e: React.MouseEvent, order: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked for order:', order._id);
    alert('DEBUG: Payment modal opening for ' + order.productName);
    setSelectedOrder(order);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentAmount || Number(paymentAmount) <= 0) return;

    setPaymentLoading(true);
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: selectedOrder._id,
          amount: Number(paymentAmount),
          method: 'GCASH',
        }),
      });

      if (response.ok) {
        alert('Payment successful! Your balance has been updated.');
        setIsPaymentModalOpen(false);
        setPaymentAmount('');
        await fetchOrders();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Payment failed');
      }
    } catch (error: any) {
      alert('Payment Error: ' + error.message);
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <div className="space-y-8 relative">
      <button 
        onClick={() => alert('GLOBAL TEST: Button is working!')}
        className="fixed top-4 left-4 z-[9999] bg-red-600 text-white p-2 rounded-lg text-xs font-bold shadow-2xl"
      >
        TEST CLICK ME
      </button>

      <div className="bg-amber-100 text-amber-800 p-2 rounded-lg text-center text-xs font-bold">
        DEBUG MODE: Version 2.2 - If you don't see this, you are not on the latest version.
      </div>

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
                  <p className="text-lg font-bold text-slate-900">₱{order.totalAmount}</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-medium text-emerald-600 uppercase">Amount Paid</p>
                  <p className="text-lg font-bold text-emerald-700">₱{order.amountPaid}</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                  <p className="text-xs font-medium text-rose-600 uppercase">Balance Due</p>
                  <p className="text-lg font-bold text-rose-700">₱{order.balance}</p>
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
                <button 
                  onClick={(e) => handleOpenPayment(e, order)}
                  className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 active:scale-[0.98] transition-all cursor-pointer relative z-50 shadow-lg shadow-indigo-200"
                >
                  Make Partial Payment (GCash)
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {isPaymentModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                📱
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">GCash Payment</h3>
                <p className="text-sm text-slate-500">
                  Paying for <span className="font-semibold text-slate-900">{selectedOrder.productName}</span>
                </p>
              </div>
            </div>
            
            <form onSubmit={handlePaymentSubmit} className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Payment Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">₱</span>
                  <input 
                    type="number" 
                    required 
                    autoFocus
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="0.00"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </div>
                <p className="text-[10px] text-slate-400 text-right">Max balance: ₱{selectedOrder.balance}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="py-3 px-4 bg-white text-slate-600 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={paymentLoading}
                  className="py-3 px-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-lg shadow-indigo-200"
                >
                  {paymentLoading ? '...' : 'Pay Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
