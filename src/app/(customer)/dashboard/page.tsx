import React from 'react';

export default function CustomerDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">My Dashboard</h1>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-full">Member since Oct 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Total Spent</p>
          <p className="text-3xl font-bold text-slate-900">$1,240.00</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Active Orders</p>
          <p className="text-3xl font-bold text-slate-900">3</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Saved Items</p>
          <p className="text-3xl font-bold text-slate-900">12</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">📦</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Order #4592{i} delivered</p>
                  <p className="text-xs text-slate-500">Oct {28-i}, 2026</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
