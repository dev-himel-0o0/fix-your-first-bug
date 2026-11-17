"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bug, Menu, X } from "lucide-react";
import { GitHubIcon } from "@/components/GitHubIcon";
import { cn } from "@/lib/cn";
import { githubUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/select", label: "Start Fixing" },
  { href: "/contributors", label: "Contributors" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/select") {
    return pathname === "/select" || pathname.endsWith("-numbers");
  }

  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <Bug className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm sm:text-base">Fix Your First Bug</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-slate-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            <GitHubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-slate-50 md:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Mobile navigation"
          >
            {links.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    active
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-900",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
