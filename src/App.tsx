import { Rocket, Clock } from 'lucide-react';

function App() {
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
      </div>
    </div>
  );
}

export default App;
