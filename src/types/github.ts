export type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export type ContributorsResult = {
  contributors: Contributor[];
  error?: string;
};
