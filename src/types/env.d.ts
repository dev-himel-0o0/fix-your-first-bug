declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GITHUB_REPO?: string;
    NEXT_PUBLIC_SITE_URL?: string;
    GITHUB_TOKEN?: string;
    VERCEL_URL?: string;
  }
}
