// Importing env files here to validate on build
import "./src/env.mjs";
import "@askthem/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@askthem/api", "@askthem/auth", "@askthem/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

export default config;
