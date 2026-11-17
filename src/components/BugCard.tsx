import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type BugCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function BugCard({
  title,
  description,
  href,
  icon: Icon,
}: BugCardProps) {
  return (
    <Link
      href={href}
      className="card group flex flex-col gap-5 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
        Fix this bug
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
