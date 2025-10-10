import { Rocket, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>
            <Rocket className="w-20 h-20 text-blue-400 relative" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Something amazing is on the horizon
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-400">
          <Clock className="w-5 h-5" />
          <p className="text-lg">We're launching soon. Stay tuned!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Link
            to="/app-terms-and-condition"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-all hover:scale-105"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/app-privacy-policy"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-all hover:scale-105"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
