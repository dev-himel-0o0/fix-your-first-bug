import { siteConfig } from "@/lib/site";
import type { Contributor, ContributorsResult } from "@/types/github";

export async function getContributors(): Promise<ContributorsResult> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${siteConfig.repo}/contributors`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (response.status === 204) {
      return { contributors: [] };
    }

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const contributors = (await response.json()) as Contributor[];

    return {
      contributors: Array.isArray(contributors) ? contributors : [],
    };
  } catch {
    return {
      contributors: [],
      error:
        "Contributors could not be loaded right now. Please try again later.",
    };
  }
}
