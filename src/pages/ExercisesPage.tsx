import { ArrowRight, Clock, Eye, Filter, Play, Search, Tag, Target } from 'lucide-react';
import { exercises } from '../data/exercises';

interface ExercisesPageProps {
  onNavigate: (page: string) => void;
}

const difficultyStyles = {
  beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  advanced: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function ExercisesPage({ onNavigate }: ExercisesPageProps) {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/40 to-blue-50/60">
      <section className="relative overflow-hidden border-b border-white/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-cyan-100 text-cyan-700 text-sm font-semibold shadow-sm mb-6">
              <Target className="h-4 w-4" /> Integrated practice lab
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Exercises that feel like real product testing work.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore every merged exercise, review the testing brief, then launch the original interactive implementation in a polished learning workspace.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl">
            {['9 integrated apps', 'Responsive routes', 'Original logic preserved'].map((item) => (
              <div key={item} className="bg-white/80 backdrop-blur rounded-2xl border border-white p-4 shadow-sm text-gray-800 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Exercises</h2>
            <p className="text-gray-600 mt-2">Choose a brief to inspect or jump straight into the app.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-500">
              <Search className="h-4 w-4" />
              <span className="text-sm">Browse by title, tag, or category</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-500">
              <Filter className="h-4 w-4" />
              <span className="text-sm">All difficulty levels</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <article
              key={exercise.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-44 bg-gradient-to-br from-cyan-100 via-blue-100 to-slate-100 overflow-hidden">
                {exercise.previewImage ? (
                  <img src={exercise.previewImage} alt="" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${difficultyStyles[exercise.difficulty]}`}>
                    {exercise.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-700 border border-white/70">
                    {exercise.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">{exercise.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap">
                    <Clock className="h-4 w-4" /> {exercise.duration}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 flex-1">{exercise.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {exercise.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                      <Tag className="h-3 w-3" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onNavigate(`exercise:${exercise.slug}`)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                  >
                    <Eye className="h-4 w-4" /> View
                  </button>
                  <button
                    onClick={() => onNavigate(`exercise-start:${exercise.slug}`)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    <Play className="h-4 w-4" /> Start
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_30%)]" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2">Ready for a guided run?</h3>
            <p className="text-slate-300 max-w-2xl">Open any detail page to review objectives, instructions, technologies, and launch the preserved implementation.</p>
          </div>
          <button onClick={() => onNavigate(`exercise:${exercises[0].slug}`)} className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-all">
            View first exercise <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
