import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = isGithubPages
  ? (process.env.GITHUB_PAGES_BASE_PATH ?? "")
  : "";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" as const } : {}),
  trailingSlash: isGithubPages,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
};

export default nextConfig;
