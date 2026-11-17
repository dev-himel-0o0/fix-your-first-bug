const fallbackUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const siteConfig = {
  name: "Fix Your First Bug",
  shortName: "FYFB",
  description:
    "A hands-on playground for your first open-source contribution. Fix one of three intentionally broken TypeScript functions and open a pull request.",
  repo:
    process.env.NEXT_PUBLIC_GITHUB_REPO ?? "dev-himel-0o0/fix-your-first-bug",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  author: {
    name: "MD. Shahadat Hussain Himel",
    github: "dev-himel-0o0",
  },
} as const;

export const githubUrl = `https://github.com/${siteConfig.repo}`;
export const contributingUrl = `${githubUrl}/blob/main/CONTRIBUTING.md`;
export const issuesUrl = `${githubUrl}/issues`;
export const licenseUrl = `${githubUrl}/blob/main/LICENSE`;
