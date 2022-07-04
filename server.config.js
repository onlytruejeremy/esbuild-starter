import esbuild from "esbuild";
import liveServer from "live-server";

const main = () => {
  esbuild.build({
    entryPoints: ["src/main.tsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: "esm",
    outdir: "public",
    logLevel: "info",
    watch: true,
  });
  const serverParams = {
    port: 3000,
    host: "0.0.0.0",
    root: "./public",
    open: false,
    file: "index.html",
    wait: 0,
    logLevel: 2,
  };
  liveServer.start(serverParams);
};

main();
