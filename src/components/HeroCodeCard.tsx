import { Bug, Terminal } from "lucide-react";

export function HeroCodeCard() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-200/60 via-transparent to-amber-200/60 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-900/20">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-xs text-slate-400">
            evenNumbers.ts
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-1 text-[11px] font-medium text-amber-300">
            <Bug className="h-3 w-3" aria-hidden="true" />1 bug
          </span>
        </div>

        <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-slate-300">
          <code>
            <span className="select-none text-slate-600">1 </span>
            <span className="text-fuchsia-400">export const</span>{" "}
            <span className="text-sky-300">evenNumber</span>{" "}
            <span className="text-slate-400">= (</span>x
            <span className="text-slate-400">: </span>
            <span className="text-amber-300">number</span>
            <span className="text-slate-400">) =&gt; {"{"}</span>
            {"\n"}
            <span className="select-none text-slate-600">2 </span>
            {"  "}
            <span className="text-fuchsia-400">if</span>{" "}
            <span className="text-slate-400">(</span>
            <span className="text-rose-300 underline decoration-rose-400 decoration-wavy underline-offset-4">
              x % 2 !== 0
            </span>
            <span className="text-slate-400">) {"{"}</span>
            {"\n"}
            <span className="select-none text-slate-600">3 </span>
            {"    "}
            <span className="text-fuchsia-400">return</span>{" "}
            <span className="text-emerald-300">true</span>
            <span className="text-slate-400">;</span>
            {"\n"}
            <span className="select-none text-slate-600">4 </span>
            {"  "}
            <span className="text-slate-400">{"}"}</span>
            {"\n"}
            <span className="select-none text-slate-600">5 </span>
            {"  "}
            <span className="text-fuchsia-400">return</span>{" "}
            <span className="text-emerald-300">false</span>
            <span className="text-slate-400">;</span>
            {"\n"}
            <span className="select-none text-slate-600">6 </span>
            <span className="text-slate-400">{"};"}</span>
          </code>
        </pre>

        <div className="flex items-center gap-2 border-t border-white/10 bg-white/5 px-5 py-3 font-mono text-xs text-slate-400">
          <Terminal className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
          npm run dev
        </div>
      </div>

      <div className="absolute -bottom-20 -left-8 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
        <p className="text-xs font-medium text-slate-500">Your first PR</p>
        <p className="text-sm font-semibold text-slate-900">3 steps away</p>
      </div>
    </div>
  );
}
