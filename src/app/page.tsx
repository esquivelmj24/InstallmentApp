import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight">
            Installment<span className="text-indigo-600">Hub</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The premier marketplace for secure installment-based commerce. 
            Buy from trusted sellers or apply to start your own business.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Link href="/login" className="px-6 py-2 bg-white text-slate-600 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            Log In
          </Link>
          <Link href="/register" className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
            Join Now
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Customer Portal Card */}
          <div className="group p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 text-left space-y-6">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
              🛒
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Customer Portal</h2>
              <p className="text-slate-500">
                Browse unique products, make purchases, or apply to become a verified seller.
              </p>
            </div>
            <Link 
              href="/dashboard" 
              className="inline-block w-full py-3 px-6 bg-indigo-600 text-white text-center font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Enter Portal
            </Link>
          </div>

          {/* Admin Portal Card */}
          <div className="group p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all duration-300 text-left space-y-6">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
              🛡️
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Admin Console</h2>
              <p className="text-slate-500">
                Manage the marketplace, review seller applications, and ensure platform security.
              </p>
            </div>
            <Link 
              href="/admin/dashboard" 
              className="inline-block w-full py-3 px-6 bg-slate-900 text-white text-center font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Access Console
            </Link>
          </div>
        </div>

        <footer className="text-slate-400 text-sm">
          © 2026 InstallmentHub Inc. All rights reserved. | v1.0.1
        </footer>
      </div>
    </div>
  );
}
