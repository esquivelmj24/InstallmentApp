import React from 'react';
import Link from 'next/link';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h1 className="text-xl font-bold text-indigo-600">InstallmentHub</h1>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Customer Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
            <span className="text-lg group-hover:scale-110 transition-transform">🏠</span>
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/shop" className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
            <span className="text-lg group-hover:scale-110 transition-transform">🛒</span>
            <span className="font-medium">Shop Products</span>
          </Link>
          <Link href="/sell" className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
            <span className="text-lg group-hover:scale-110 transition-transform">💰</span>
            <span className="font-medium">Seller Panel</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2 bg-slate-100 rounded-2xl">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold text-slate-900 truncate">John Doe</p>
              <p className="text-[10px] text-slate-500 truncate">customer@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-sm font-medium text-slate-500">Welcome back, John!</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-indigo-600 relative">
              🔔 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link href="/" className="text-xs font-semibold text-slate-400 hover:text-slate-600 underline">Exit Portal</Link>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
