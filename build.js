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
    packages: "external", // esbuild will leave node_modules and built-ins alone
  })
  .catch(() => process.exit(1));
