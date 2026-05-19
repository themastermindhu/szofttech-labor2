import { ArrowLeft, ExternalLink, Maximize2 } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseStartPageProps {
  exercise: Exercise;
  onBack: () => void;
  onDetails: () => void;
}

export default function ExerciseStartPage({ exercise, onBack, onDetails }: ExerciseStartPageProps) {
  return (
    <div className="pt-16 min-h-screen bg-slate-950">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all">
              <ArrowLeft className="h-4 w-4" /> Exercises
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{exercise.title}</h1>
              <p className="text-sm text-gray-500">Interactive exercise workspace</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={onDetails} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all">
              View Brief
            </button>
            <a href={exercise.appPath} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
              <ExternalLink className="h-4 w-4" /> Open Full Page
            </a>
          </div>
        </div>
      </div>
      <div className="p-3 md:p-6">
        <div className="mx-auto max-w-[1600px] rounded-3xl overflow-hidden border border-white/10 bg-white shadow-2xl">
          <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center justify-between px-4">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-amber-400" /><span className="w-3 h-3 rounded-full bg-emerald-400" /></div>
            <div className="text-xs font-semibold text-slate-500 truncate px-3">/exercises/{exercise.slug}</div>
            <Maximize2 className="h-4 w-4 text-slate-400" />
          </div>
          <iframe title={exercise.title} src={exercise.appPath} className="w-full h-[calc(100vh-11rem)] min-h-[680px] bg-white" />
        </div>
      </div>
    </div>
  );
}
