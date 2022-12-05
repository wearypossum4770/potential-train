import { webcrypto } from "crypto";
import { resolve, extname } from "path";
import {
  resolveAlgorighm,
  algorithmWarning,
  crossOriginWarning,
  resolveCrossOrigin,
  crossoriginUnset,
} from "./constants";
import htmlHandler from "./utils";

const { version } = process;
const defaultAlgorithm = "SHA-256";
const cacheFilename = resolve("./scripts/rollup_subresource_cache.json");

export default function generateIntegrityHash(config = {}) {
  const { algorithm, crossorigin, extensions = [".css"] } = config;
  const prefix = algorithm
    ? algorithm.replaceAll(/\-/g, "").toLowerCase()
    : "sha256";
  const selectors = new Set(extensions);
  return {
    name: "generate-integirty-hash",
    defaultCrossorigin: "anonymous",
    async generateBundle(_outputOptions, assetInfo) {
      const contents = [];
      if (!crossorigin) this.warn(crossoriginUnset);
      if (crossorigin !== "anonymous") this.warn(crossOriginWarning);
      if (!resolveAlgorighm(algorithm)) this.warn(algorithmWarning);

      const assets = Object.keys(assetInfo);

      for (let item in assets) {
        const filename = assets[item];
        const fileExtension = extname(filename);
        const context = assetInfo[filename];
        if (selectors.has(fileExtension)) {
          const data = context.source ?? context.code;
          const hashBuffer = await webcrypto.subtle.digest(
            algorithm ?? defaultAlgorithm,
            new Buffer.from(data)
          );
          const hashArray = new Buffer.from(new Uint8Array(hashBuffer));
          contents.push({
            filename,
            integrity: `${prefix}-${hashArray.toString("base64")}`,
            version,
            build_date: new Date().toISOString(),
          });
        }
        if (filename.endsWith(".html")) {
          const source = htmlHandler({
            ...config,
            contents,
            source: context.source,
          });
          const { name, type, fileName } = context;
          this.emitFile({ source, type, name, fileName });
        }
      }
    },
  };
}
