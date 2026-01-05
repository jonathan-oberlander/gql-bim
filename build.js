import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/server.ts"], // Your main entry file
    bundle: true, // Combine all imports into one file
    minify: true, // Shrink the code
    sourcemap: true, // Helpful for debugging production logs
    platform: "node", // Target Node.js environment
    target: ["node22"], // Adjust to your Node version
    outfile: "dist/index.js", // Output location
    format: "esm", // Generate modern ESM code
    // Some dependencies (like GraphQL) don't bundle well;
    // you can mark them as external if needed:
    external: ["fsevents"],
  })
  .catch(() => process.exit(1));
