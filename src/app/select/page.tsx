import type { Metadata } from "next";
import { Binary, Hash, Search } from "lucide-react";
import { BugCard } from "@/components/BugCard";
import { issuesUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Choose a bug",
  description:
    "Pick one of three intentionally broken TypeScript functions and fix it.",
};

const bugs = [
  {
    title: "Odd Numbers",
    description:
      "The page should highlight odd numbers, but the helper disagrees. Inspect the condition and fix it.",
    href: "/odd-numbers",
    icon: Hash,
  },
  {
    title: "Even Numbers",
    description:
      "The page should highlight even numbers, but the helper disagrees. Inspect the condition and fix it.",
    href: "/even-numbers",
    icon: Binary,
  },
  {
    title: "Prime Numbers",
    description:
      "Some values are being highlighted that should not be prime. Find the missing edge case.",
    href: "/prime-numbers",
    icon: Search,
  },
];

export default function SelectPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Bug board
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Pick a bug to fix
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Each card is a tiny, self-contained exercise. Open the page, compare
            the expected result with what you see, then fix the matching
            function.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bugs.map((bug) => (
            <BugCard key={bug.href} {...bug} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white/60 p-6 text-center">
          <p className="text-sm text-slate-600">
            Want to add another category?{" "}
            <a
              href={issuesUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Open an issue
            </a>{" "}
            and propose it first.
          </p>
        </div>
      </div>
    </section>
  );
}
