const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY || "";
const repoName = repository.split("/")[1] || "";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const basePath = isGitHubActions && !isUserOrOrgSite ? "/" + repoName : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
