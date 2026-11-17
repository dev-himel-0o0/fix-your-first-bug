"use client";

import { useEffect } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-50 text-rose-600 ring-1 ring-rose-200">
        <TriangleAlert className="h-8 w-8" aria-hidden="true" />
      </div>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Something broke
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        An unexpected error occurred. Try again, or head back home.
      </p>
      <button type="button" onClick={reset} className="btn-primary mt-8">
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Try again
      </button>
    </section>
  );
}
