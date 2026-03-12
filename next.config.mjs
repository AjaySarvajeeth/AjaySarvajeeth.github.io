/**
 * Next.js static export configuration for GitHub Pages.
 *
 * Works for both:
 * 1) User/Org site repo: <username>.github.io  -> https://<username>.github.io/
 * 2) Project site repo: <repo>                -> https://<username>.github.io/<repo>/
 */

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

// If this is NOT the special <username>.github.io repo, we need a basePath.
const isUserOrOrgSite = repo.endsWith('.github.io');
const basePath = isGitHubActions && !isUserOrOrgSite ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
