import type { Metadata } from "next";
import Image from "next/image";
import { GitHubIcon } from "@/components/GitHubIcon";
import { getContributors } from "@/lib/github";
import { githubUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "The people who have helped make Fix Your First Bug better.",
};

export const revalidate = 3600;

export default async function ContributorsPage() {
  const { contributors, error } = await getContributors();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Community
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Contributors
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Everyone who has helped make this project better. Your name can be
            here too.
          </p>
        </div>

        {error ? (
          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
            <p className="font-semibold">Contributors are taking a break.</p>
            <p className="mt-1 text-sm">{error}</p>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-900 underline underline-offset-4"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              View the repository on GitHub
            </a>
          </div>
        ) : contributors.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">
            No contributors yet. Be the first!
          </div>
        ) : (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contributors.map((contributor) => (
              <li
                key={contributor.id}
                className="card flex flex-col items-center gap-4 text-center"
              >
                <Image
                  src={contributor.avatar_url}
                  alt={`${contributor.login}'s avatar`}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full ring-2 ring-slate-200"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {contributor.login}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {contributor.contributions} contribution
                    {contributor.contributions === 1 ? "" : "s"}
                  </p>
                </div>
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full"
                >
                  <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
