import Link from "next/link";
import { GitHubIcon } from "@/components/GitHubIcon";
import {
  contributingUrl,
  githubUrl,
  licenseUrl,
  siteConfig,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.author.name}. MIT licensed.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/contributors" className="hover:text-slate-900">
            Contributors
          </Link>
          <a
            href={contributingUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900"
          >
            Contributing
          </a>
          <a
            href={licenseUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900"
          >
            License
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-slate-900"
          >
            <GitHubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
