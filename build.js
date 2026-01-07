import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/server.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: "node",
    target: ["node22"],
    outfile: "dist/index.js",
    format: "esm",
    // THIS IS THE KEY:
    // It tells esbuild to leave node_modules and built-ins alone
    packages: "external",
  })
  .catch(() => process.exit(1));
