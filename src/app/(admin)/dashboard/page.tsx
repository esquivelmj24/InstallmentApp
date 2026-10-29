import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">System Overview</h1>
        <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600">
          Last update: Just now
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Total Users</p>
          <p className="text-3xl font-bold text-slate-900">12,402</p>
          <p className="text-xs text-emerald-600 font-bold">↑ 12% this month</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Verified Sellers</p>
          <p className="text-3xl font-bold text-slate-900">842</p>
          <p className="text-xs text-indigo-600 font-bold">↑ 5% this month</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Daily Revenue</p>
          <p className="text-3xl font-bold text-slate-900">$42,100</p>
          <p className="text-xs text-emerald-600 font-bold">↑ 8% this month</p>
        </div>
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <p className="text-sm font-medium text-slate-500">Pending Requests</p>
          <p className="text-3xl font-bold text-slate-900">12</p>
          <p className="text-xs text-amber-600 font-bold">Action required</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Marketplace Health</h2>
          <div className="space-y-4">
            {[
              { label: 'Server Uptime', value: 99.9, color: 'bg-emerald-500' },
              { label: 'API Latency', value: 42, color: 'bg-indigo-500', suffix: 'ms' },
              { label: 'Error Rate', value: 0.02, color: 'bg-rose-500', suffix: '%' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600">{stat.label}</span>
                  <span className="font-bold text-slate-900">{stat.value}{stat.suffix || ''}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${stat.color}`} style={{ width: `${stat.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-2xl border border-slate-100 transition-all text-left space-y-1">
              <span className="text-xl">📩</span>
              <p className="text-sm font-bold">Review Requests</p>
            </button>
            <button className="p-4 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-2xl border border-slate-100 transition-all text-left space-y-1">
              <span className="text-xl">⚙️</span>
              <p className="text-sm font-bold">System Settings</p>
            </button>
            <button className="p-4 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-2xl border border-slate-100 transition-all text-left space-y-1">
              <span className="text-xl">🛡️</span>
              <p className="text-sm font-bold">Security Audit</p>
            </button>
            <button className="p-4 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-2xl border border-slate-100 transition-all text-left space-y-1">
              <span className="text-xl">📈</span>
              <p className="text-sm font-bold">Growth Report</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
