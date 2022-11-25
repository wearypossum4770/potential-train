import crypto from "crypto";
import { writeFileSync } from "fs";
import { resolve, extname } from 'path'
import {
  resolveAlgorighm,
  algorithmWarning,
  crossOriginWarning,
  resolveCrossOrigin,
} from "./constants";
import htmlHandler from "./utils";

const { version } = process;
const defaultAlgorithm = "SHA-256";

export default function generateIntegrityHash(config = {}) {
  const { algorithm, crossorigin, extension=['.css'] } = config;
  const prefix = algorithm
    ? algorithm.replaceAll(/\-/g, "").toLowerCase()
    : "sha256";
  const selectors = new Set(extension)
  return {
    name: "generate-integirty-hash",
    defaultCrossorigin: "anonymous",
    async generateBundle(_outputOptions, assetInfo) {
      const contents = [];
      if (!crossorigin)
        this.warn(
          "crossorigin value not set, default 'anonymous' will be used."
        );
      else if (crossorigin !== "anonymous") this.warn(crossOriginWarning);
      if (!resolveAlgorighm(algorithm)) this.warn(algorithmWarning);
      const assets = Object.keys(assetInfo);
      for (let item in assets) {
        const filename = assets[item];
        const fileExtension = extname(filename);
        const context = assetInfo[filename];
        if (selectors.has(fileExtension)) {
          const data = context.source ?? context.code;
          const hashBuffer = await crypto.webcrypto.subtle.digest(
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
          const source = htmlHandler({ ...config, source: context.source })
          const { name, type, fileName } = context;
          this.emitFile({ source, type, name, fileName });
        }
      }
      writeFileSync(resolve('./scripts/rollup_subresource_cache.json'), JSON.stringify(contents));
    },
  };
}
