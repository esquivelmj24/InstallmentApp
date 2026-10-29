import React from 'react';
import { SellerRequest } from '@/types';

const MOCK_REQUESTS: SellerRequest[] = [
  { id: '1', userId: 'u1', userName: 'Alice Johnson', requestDate: '2026-10-25', status: 'PENDING' },
  { id: '2', userId: 'u2', userName: 'Bob Smith', requestDate: '2026-10-26', status: 'PENDING' },
  { id: '3', userId: 'u3', userName: 'Charlie Brown', requestDate: '2026-10-27', status: 'PENDING' },
  { id: '4', userId: 'u4', userName: 'Diana Prince', requestDate: '2026-10-28', status: 'PENDING' },
];

export default function SellerRequests() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Seller Applications</h1>
          <p className="text-slate-500 mt-1">Review and approve customers who wish to sell on the platform.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Applicant</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date Requested</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_REQUESTS.map((req) => (
              <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                      {req.userName.charAt(0)}
                    </div>
                    <span className="font-semibold text-slate-900">{req.userName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{req.requestDate}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-full uppercase">
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg hover:bg-emerald-100 transition-colors">
                      Approve
                    </button>
                    <button className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-lg hover:bg-rose-100 transition-colors">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-4">
        <p className="text-sm text-slate-500">Showing 4 of 4 pending requests</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs disabled:opacity-50" disabled>Prev</button>
          <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs disabled:opacity-50" disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
