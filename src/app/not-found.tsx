import Link from "next/link";
import { ArrowLeft, Bug } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg">
        <Bug className="h-8 w-8" aria-hidden="true" />
      </div>
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
        404
      </p>
      <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        This page wandered off
      </h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
        The page you are looking for does not exist. The bugs, however, are
        still waiting.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
        <Link href="/select" className="btn-secondary">
          Browse bugs
        </Link>
      </div>
    </section>
  );
}
