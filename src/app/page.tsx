import Link from "next/link";
import {
  ArrowRight,
  Binary,
  Bug,
  Code2,
  GitPullRequest,
  Hash,
  Search,
  Sparkles,
} from "lucide-react";
import { GitHubIcon } from "@/components/GitHubIcon";
import { HeroCodeCard } from "@/components/HeroCodeCard";
import { contributingUrl, githubUrl } from "@/lib/site";

const steps = [
  {
    title: "Pick a bug",
    description:
      "Choose one of three small number-theory exercises. Each one has a visible symptom.",
    icon: Search,
  },
  {
    title: "Fix the function",
    description:
      "Change one TypeScript function in src/lib/bugs. Keep the signature intact.",
    icon: Code2,
  },
  {
    title: "Open a pull request",
    description:
      "Push a branch, open a PR, and Vercel posts a preview link automatically.",
    icon: GitPullRequest,
  },
];

const exercises = [
  {
    title: "Odd Numbers",
    description: "The highlighted numbers do not look odd.",
    href: "/odd-numbers",
    icon: Hash,
  },
  {
    title: "Even Numbers",
    description: "The highlighted numbers do not look even.",
    href: "/even-numbers",
    icon: Binary,
  },
  {
    title: "Prime Numbers",
    description: "A couple of values are slipping through.",
    href: "/prime-numbers",
    icon: Search,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-70"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 hero-glow"
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="badge">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Open source · Beginner friendly
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Fix your <span className="text-indigo-600">first bug</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A tiny open-source playground for people who have never opened a
              pull request. Pick one of three intentionally broken TypeScript
              functions, fix it, and ship your first contribution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/select" className="btn-primary">
                Start fixing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              {[
                ["3", "intentional bugs"],
                ["3", "files to touch"],
                ["1", "first pull request"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold tracking-tight text-slate-900">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroCodeCard />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/60">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A real contribution flow, without the intimidating repo.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              You get the full fork → branch → fix → pull request workflow in a
              codebase small enough to understand in one sitting.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={step.title} className="card">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="badge">
              <Bug className="h-3.5 w-3.5" aria-hidden="true" />
              Three tiny exercises
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find the bug. Change one condition. Done.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every exercise is self-contained. You do not need to understand
              the whole app, and you cannot break anything outside the file you
              are fixing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/select" className="btn-primary">
                Browse the bug board
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={contributingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Read the guide
              </a>
            </div>
          </div>

          <ul className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {exercises.map((exercise) => {
              const Icon = exercise.icon;

              return (
                <li key={exercise.href}>
                  <Link
                    href={exercise.href}
                    className="group flex items-center gap-4 p-5 transition hover:bg-slate-50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-slate-900">
                        {exercise.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate-500">
                        {exercise.description}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-700"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white shadow-xl sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
                Ready when you are
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Make your first contribution today.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                No team invite, no interview, no giant codebase. Just one small
                bug and a pull request.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/select"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Pick a bug
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                Star the repo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
