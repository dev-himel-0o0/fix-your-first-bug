import Link from "next/link";
import { ArrowRight, Bug } from "lucide-react";
import { NumberGrid } from "@/components/NumberGrid";
import { contributingUrl } from "@/lib/site";

type BugExercisePageProps = {
  title: string;
  description: string;
  filePath: string;
  numbers: number[];
  isMatch: (value: number) => boolean;
  matchLabel: string;
  noMatchLabel: string;
};

export function BugExercisePage({
  title,
  description,
  filePath,
  numbers,
  isMatch,
  matchLabel,
  noMatchLabel,
}: BugExercisePageProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="badge">
            <Bug className="h-3.5 w-3.5" aria-hidden="true" />
            Intentional bug
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-sm bg-slate-900"
              aria-hidden="true"
            />
            Reported as matching
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-sm bg-white ring-1 ring-slate-300"
              aria-hidden="true"
            />
            Reported as not matching
          </span>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <NumberGrid
            numbers={numbers}
            isMatch={isMatch}
            matchLabel={matchLabel}
            noMatchLabel={noMatchLabel}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Where to fix it
            </p>
            <code className="mt-3 block overflow-x-auto rounded-xl bg-slate-950 px-4 py-3 text-sm text-slate-100">
              {filePath}
            </code>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Change only the exported function. Keep the{" "}
              <code className="code-inline">
                {"(x: number) => boolean"}
              </code>{" "}
              signature intact so the page keeps working.
            </p>
          </div>

          <div className="card flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Want to fix this?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Read the contribution guide, open an issue, and send a pull
                request. Vercel will post a preview link on your PR.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/select" className="btn-secondary">
                Back to bugs
              </Link>
              <a
                href={contributingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Contribution guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
