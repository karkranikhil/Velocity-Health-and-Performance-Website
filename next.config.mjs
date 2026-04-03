const isStaticExport =
  process.env.STATIC_EXPORT === "true" ||
  process.env.GITHUB_PAGES === "true";

const rawBase = (process.env.BASE_PATH ?? "").trim();
const basePath =
  rawBase && rawBase !== "/" ? rawBase.replace(/\/$/, "") : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
