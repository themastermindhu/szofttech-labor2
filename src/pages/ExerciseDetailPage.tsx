import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Code2, Layers, Play, Target } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseDetailPageProps {
  exercise: Exercise;
  onBack: () => void;
  onStart: () => void;
}

const difficultyStyles = {
  beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  advanced: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function ExerciseDetailPage({ exercise, onBack, onStart }: ExerciseDetailPageProps) {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-700 font-semibold mb-8 transition-colors">
          <ArrowLeft className="h-5 w-5" /> Back to Exercises
        </button>

        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 items-stretch mb-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-bold border ${difficultyStyles[exercise.difficulty]}`}>{exercise.difficulty}</span>
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-cyan-50 text-cyan-700 border border-cyan-100">{exercise.category}</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-slate-50 text-slate-600 border border-slate-100"><Clock className="h-4 w-4" /> {exercise.duration}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">{exercise.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{exercise.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={onStart} className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-700 transition-all">
                <Play className="h-5 w-5" /> Start Exercise <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={onBack} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-all">
                Browse All
              </button>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="h-full min-h-[320px] bg-gradient-to-br from-cyan-100 via-blue-100 to-slate-100 relative">
              {exercise.previewImage ? <img src={exercise.previewImage} alt={`${exercise.title} preview`} className="w-full h-full object-cover" /> : null}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-lg">Original implementation preserved</p>
                <p className="text-white/80">Runs as a dedicated routed exercise workspace.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <InfoCard icon={<Target className="h-5 w-5" />} title="Objectives" items={exercise.objectives} />
            <InfoCard icon={<CheckCircle2 className="h-5 w-5" />} title="Instructions" items={exercise.instructions} numbered />
          </section>
          <aside className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white"><Code2 className="h-5 w-5" /></div>
                <h2 className="text-xl font-bold text-gray-900">Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {exercise.technologies.map((tech) => <span key={tech} className="px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700">{tech}</span>)}
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white"><Layers className="h-5 w-5" /></div>
                <h2 className="text-xl font-bold text-gray-900">Tags</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {exercise.tags.map((tag) => <span key={tag} className="px-3 py-2 bg-cyan-50 border border-cyan-100 rounded-xl text-sm font-semibold text-cyan-700">{tag}</span>)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, items, numbered = false }: { icon: React.ReactNode; title: string; items: string[]; numbered?: boolean }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item} className="flex gap-4">
            <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold flex-shrink-0">{numbered ? index + 1 : <CheckCircle2 className="h-4 w-4" />}</div>
            <p className="text-gray-600 leading-relaxed pt-1">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
