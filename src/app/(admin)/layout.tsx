import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Admin Sidebar */}
      <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-6 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <h1 className="text-xl font-bold text-white tracking-tight">SuperAdmin</h1>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-2">Control Center</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors group">
            <span className="text-lg group-hover:rotate-12 transition-transform">📊</span>
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="/admin/requests" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors group relative">
            <span className="text-lg group-hover:scale-110 transition-transform">📩</span>
            <span className="font-medium">Seller Requests</span>
            <span className="ml-auto px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full">12</span>
          </Link>
          <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest">Management</div>
          <Link href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors group">
            <span className="text-lg group-hover:scale-110 transition-transform">👥</span>
            <span className="font-medium">Users</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors group">
            <span className="text-lg group-hover:scale-110 transition-transform">📦</span>
            <span className="font-medium">Product Audit</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold border-2 border-indigo-500">AD</div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Admin User</p>
              <p className="text-[10px] text-slate-500 truncate">super@hub.io</p>
            </div>
          </div>
          <Link href="/" className="mt-4 block text-center text-xs text-slate-500 hover:text-white transition-colors underline">Return to Home</Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Administrative Workspace</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
              System Online
            </div>
          </div>
        </header>
        <div className="p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
